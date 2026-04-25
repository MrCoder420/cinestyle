import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Plus, Edit2, Trash2, ArrowLeft, UploadCloud, X } from 'lucide-react';
import { useData } from '../context/DataContext';
import { supabase } from '../supabaseClient';
import { PAGE_TRANSITION } from './Common';

export function AdminPanelScreen({ onBack }: { onBack: () => void }) {
  const { movies, characters, outfits } = useData();
  const [activeTab, setActiveTab] = useState<'movies' | 'characters' | 'outfits'>('movies');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [uploading, setUploading] = useState(false);

  const handleDelete = async (table: string, id: string) => {
    if (!window.confirm(`Are you sure you want to delete this ${table}?`)) return;
    try {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) throw error;
      alert('Deleted successfully! Please refresh to see changes.');
    } catch (err: any) {
      alert(`Error deleting: ${err.message}`);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${activeTab}/${fileName}`;

      const { error: uploadError } = await supabase.storage.from('images').upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('images').getPublicUrl(filePath);
      setFormData({ ...formData, [fieldName]: data.publicUrl });
      alert('Image uploaded successfully!');
    } catch (error: any) {
      alert(`Error uploading image: ${error.message}. Make sure you created an 'images' bucket in Supabase and made it public!`);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setUploading(true);
      // Auto-generate ID if it's new
      const dataToSave = { ...formData, id: formData.id || crypto.randomUUID() };
      
      const { error } = await supabase.from(activeTab).upsert(dataToSave);
      if (error) throw error;
      
      alert('Saved successfully! Please refresh to see changes.');
      setIsModalOpen(false);
      setFormData({});
    } catch (err: any) {
      alert(`Error saving: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const openAddModal = () => {
    setFormData({});
    setIsModalOpen(true);
  };

  return (
    <motion.main {...PAGE_TRANSITION} className="pb-32 bg-surface min-h-screen">
      <div className="sticky top-0 z-50 bg-surface px-6 md:px-12 lg:px-24 py-4 border-b border-outline-variant/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" onClick={onBack} />
          <h1 className="text-2xl font-bold font-serif italic text-primary flex items-center gap-2">
            <Settings className="w-6 h-6" /> Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 mt-8">
        <div className="flex gap-4 mb-8">
          {['movies', 'characters', 'outfits'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all ${
                activeTab === tab ? 'bg-primary text-on-primary' : 'bg-surface-container hover:bg-surface-container-high'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold capitalize">Manage {activeTab}</h2>
          <button onClick={openAddModal} className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold hover:bg-primary/20 transition-colors">
            <Plus className="w-4 h-4" /> Add New
          </button>
        </div>

        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container border-b border-outline-variant/10 text-on-surface-variant text-sm uppercase tracking-wider">
                  <th className="p-4">Image</th>
                  <th className="p-4">Name / Title</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(activeTab === 'movies' ? movies : activeTab === 'characters' ? characters : outfits).map((item: any) => (
                  <tr key={item.id} className="border-b border-outline-variant/5 hover:bg-surface-container-highest transition-colors">
                    <td className="p-4">
                       <img src={item.posterUrl || item.portraitUrl || item.imageUrl} className="w-12 h-12 object-cover rounded-md bg-surface" />
                    </td>
                    <td className="p-4 font-medium">{item.name || item.title}</td>
                    <td className="p-4 flex gap-3">
                      <button onClick={() => { setFormData(activeTab === 'movies' ? {id: item.id, title: item.title, genre: item.genre, industry: item.industry, year: item.year, poster_url: item.posterUrl} : activeTab === 'characters' ? {id: item.id, name: item.name, portrait_url: item.portraitUrl, movie_id: item.movieId} : {id: item.id, name: item.name, category: item.category, price_str: item.price, image_url: item.imageUrl, ecommerce_link: item.link, character_id: item.characterId}); setIsModalOpen(true); }} className="p-2 rounded-lg bg-surface-container hover:text-primary transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(activeTab, item.id)} className="p-2 rounded-lg bg-surface-container hover:text-error transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
           <div className="bg-surface-container-low w-full max-w-lg rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 bg-surface-container rounded-full hover:text-error"><X className="w-5 h-5"/></button>
              <h2 className="text-2xl font-bold mb-6 capitalize">{formData.id ? 'Edit' : 'Add'} {activeTab.slice(0, -1)}</h2>
              
              <form onSubmit={handleSave} className="space-y-4">
                 {activeTab === 'movies' && (
                    <>
                       <input placeholder="Movie Title" required className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} />
                       <input placeholder="Genre" className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.genre || ''} onChange={e => setFormData({...formData, genre: e.target.value})} />
                       <input placeholder="Industry (e.g. Hollywood)" className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.industry || ''} onChange={e => setFormData({...formData, industry: e.target.value})} />
                       <input placeholder="Year" className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.year || ''} onChange={e => setFormData({...formData, year: e.target.value})} />
                       <div className="p-4 bg-surface rounded-xl border border-outline-variant/10">
                          <p className="text-sm font-bold mb-2">Movie Poster</p>
                          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'poster_url')} className="mb-2 w-full" />
                          <input placeholder="Or paste Image URL" className="w-full p-2 bg-surface-container rounded-lg text-sm" value={formData.poster_url || ''} onChange={e => setFormData({...formData, poster_url: e.target.value})} />
                          {formData.poster_url && <img src={formData.poster_url} className="mt-2 h-20 rounded-md" />}
                       </div>
                    </>
                 )}

                 {activeTab === 'characters' && (
                    <>
                       <input placeholder="Character Name" required className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} />
                       <select required className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.movie_id || ''} onChange={e => setFormData({...formData, movie_id: e.target.value})}>
                          <option value="">Select Movie</option>
                          {movies.map(m => <option key={m.id} value={m.id}>{m.title}</option>)}
                       </select>
                       <div className="p-4 bg-surface rounded-xl border border-outline-variant/10">
                          <p className="text-sm font-bold mb-2">Character Portrait</p>
                          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'portrait_url')} className="mb-2 w-full" />
                          <input placeholder="Or paste Image URL" className="w-full p-2 bg-surface-container rounded-lg text-sm" value={formData.portrait_url || ''} onChange={e => setFormData({...formData, portrait_url: e.target.value})} />
                          {formData.portrait_url && <img src={formData.portrait_url} className="mt-2 h-20 rounded-md" />}
                       </div>
                    </>
                 )}

                 {activeTab === 'outfits' && (
                    <>
                       <input placeholder="Outfit Name" required className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} />
                       <input placeholder="Category (e.g. Formal, Casual)" className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.category || ''} onChange={e => setFormData({...formData, category: e.target.value})} />
                       <input placeholder="Price (e.g. ₹1,299)" className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.price_str || ''} onChange={e => setFormData({...formData, price_str: e.target.value})} />
                       <input placeholder="E-commerce Link (Amazon/Myntra)" className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.ecommerce_link || ''} onChange={e => setFormData({...formData, ecommerce_link: e.target.value})} />
                       <select required className="w-full p-3 bg-surface rounded-xl border border-outline-variant/10" value={formData.character_id || ''} onChange={e => setFormData({...formData, character_id: e.target.value})}>
                          <option value="">Select Character</option>
                          {characters.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                       </select>
                       <div className="p-4 bg-surface rounded-xl border border-outline-variant/10">
                          <p className="text-sm font-bold mb-2">Outfit Image</p>
                          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'image_url')} className="mb-2 w-full" />
                          <input placeholder="Or paste Image URL" className="w-full p-2 bg-surface-container rounded-lg text-sm" value={formData.image_url || ''} onChange={e => setFormData({...formData, image_url: e.target.value})} />
                          {formData.image_url && <img src={formData.image_url} className="mt-2 h-20 rounded-md" />}
                       </div>
                    </>
                 )}

                 <button disabled={uploading} type="submit" className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-primary/90 transition-colors">
                    {uploading ? 'Saving...' : 'Save Data'}
                 </button>
              </form>
           </div>
        </div>
      )}
    </motion.main>
  );
}
