import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Plus, Edit2, Trash2, ArrowLeft } from 'lucide-react';
import { useData } from '../context/DataContext';
import { supabase } from '../supabaseClient';
import { PAGE_TRANSITION, ScreenHeader } from './Common';

export function AdminPanelScreen({ onBack }: { onBack: () => void }) {
  const { movies, characters, outfits } = useData();
  const [activeTab, setActiveTab] = useState<'movies' | 'characters' | 'outfits'>('outfits');

  const handleDelete = async (table: string, id: string) => {
    if (!window.confirm(`Are you sure you want to delete this ${table}?`)) return;
    try {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) throw error;
      alert('Deleted successfully! Refresh to see changes.');
    } catch (err: any) {
      alert(`Error deleting: ${err.message}`);
    }
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
          <button className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold hover:bg-primary/20 transition-colors">
            <Plus className="w-4 h-4" /> Add New
          </button>
        </div>

        <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container border-b border-outline-variant/10 text-on-surface-variant text-sm uppercase tracking-wider">
                  <th className="p-4">ID</th>
                  <th className="p-4">Name / Title</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(activeTab === 'movies' ? movies : activeTab === 'characters' ? characters : outfits).map((item: any) => (
                  <tr key={item.id} className="border-b border-outline-variant/5 hover:bg-surface-container-highest transition-colors">
                    <td className="p-4 font-mono text-xs opacity-70">{item.id.substring(0, 8)}...</td>
                    <td className="p-4 font-medium">{item.name || item.title}</td>
                    <td className="p-4 flex gap-3">
                      <button className="p-2 rounded-lg bg-surface-container hover:text-primary transition-colors">
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
    </motion.main>
  );
}
