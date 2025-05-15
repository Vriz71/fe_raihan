"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';


export default function Dashboard() {
    const [fullName, setFullName] = useState('');
    const [user, setUser] = useState(null);
    const [data, setData] = useState([]);
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [gambar, setGambar] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProfiles = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) return;

            const { data, error } = await supabase
                .from('profiles')
                .select('full_name')
                .eq('id', session.user.id)
                .single();

            if (error) console.error('Gagal ambil nama:', error);
            else setFullName(data.full_name);
        };

        fetchProfiles();
    }, []);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) router.push('/admin/login');
            else setUser(session.user);
        });
    }, []);

    const fetchKegiatan = async () => {
        const { data, error } = await supabase
            .from('kegiatan')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) console.error('Gagal ambil kegiatan:', error);
        else setData(data);
    };

    useEffect(() => {
        fetchKegiatan();
    }, []);

    const uploadGambar = async (file) => {
        const fileExt = file.name.split('.').pop();
        const filePath = `${uuidv4()}.${fileExt}`;
        const { data, error } = await supabase.storage.from('kegiatan').upload(filePath, file);
        if (error) throw error;
        const { data: urlData } = supabase.storage.from('kegiatan').getPublicUrl(filePath);
        console.log(data)
        return urlData.publicUrl;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let gambar_url = '';

        if (gambar) {
            try {
                gambar_url = await uploadGambar(gambar);
            } catch (err) {
                console.error('Upload gagal:', err);
                return;
            }
        }

        if (editingId) {
            const { error } = await supabase
                .from('kegiatan')
                .update({ judul, deskripsi })
                .eq('id', editingId);
            if (!error) resetForm();
        } else {
            const { error } = await supabase
                .from('kegiatan')
                .insert({ judul, deskripsi, gambar_url });
            if (!error) resetForm();
        }

        fetchKegiatan();
    };

    const resetForm = () => {
        setJudul('');
        setDeskripsi('');
        setGambar(null);
        setEditingId(null);
    };

    const handleDelete = async (id) => {
        const { error } = await supabase.from('kegiatan').delete().eq('id', id);
        if (!error) fetchKegiatan();
    };

    const handleEdit = (item) => {
        setJudul(item.judul);
        setDeskripsi(item.deskripsi);
        setEditingId(item.id);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div className="min-h-screen flex flex-col font-Ubuntu bg-gray-100">
            <header className="bg-main text-white p-4 flex justify-between items-center shadow">
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
                >
                    Logout
                </button>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <nav className="w-64 bg-white border-r shadow-inner p-6">
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </nav>

                <main className="flex-1 p-8 overflow-auto">
                    <h2 className="text-xl text-black font-semibold mb-4">
                        Welcome, <span className="text-main">{fullName || 'Admin'}</span>
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Manage kegiatan for your landing page here.
                    </p>

                    <section className="mb-10 p-4 border font-Ubuntu text-black border-none rounded-md bg-white shadow-sm">
                        <h3 className="text-lg font-medium mb-4">
                            {editingId ? 'Edit Kegiatan' : 'Tambah Kegiatan'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={judul}
                                onChange={(e) => setJudul(e.target.value)}
                                placeholder="Judul kegiatan"
                                className="w-full border p-2 rounded"
                                required
                            />
                            <textarea
                                value={deskripsi}
                                onChange={(e) => setDeskripsi(e.target.value)}
                                placeholder="Deskripsi kegiatan"
                                className="w-full border p-2 rounded"
                                required
                            />
                            {!editingId && (
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setGambar(e.target.files[0])}
                                    className="w-full"
                                    required
                                />
                            )}
                            <div className="flex gap-2">
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                                    {editingId ? 'Update' : 'Tambah'}
                                </button>
                                {editingId && (
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="bg-gray-400 text-white px-4 py-2 rounded"
                                    >
                                        Batal
                                    </button>
                                )}
                            </div>
                        </form>
                    </section>

                    <section>
                        <h3 className="text-lg font-Ubuntu text-black font-medium mb-4">Daftar Kegiatan</h3>
                        <div className="space-y-4">
                            {data.map((item) => (
                                <div key={item.id} className="border p-4 rounded shadow-sm bg-white">
                                    {item.gambar_url && (
                                        <img
                                            src={item.gambar_url}
                                            alt={item.judul}
                                            className="w-full h-48 object-cover mb-2 rounded"
                                        />
                                    )}
                                    <h4 className="font-bold">{item.judul}</h4>
                                    <p className="text-gray-600">{item.deskripsi}</p>
                                    <div className="flex gap-2 mt-2">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
