import { Home, Star, Camera, Briefcase, BarChart2, Grid } from 'lucide-react';

export default function Sidebar(){
  return(
    // pb-6 supaya tidak mepet banget sama bawah layar iPhone
    <nav className="flex items-center justify-between px-8 py-4 pb-8 md:flex-col md:h-full md:p-6 md:pb-6 md:bg-white md:rounded-3xl md:border md:shadow-sm">
      <div className="hidden md:block font-bold text-2xl text-blue-500 mb-12">A.</div>
      <div className="flex w-full md:w-auto justify-between md:flex-col gap-0 md:gap-8 text-slate-400">
        <Home className="w-6 h-6 text-blue-500" />
        <Star className="w-6 h-6" />
        <Camera className="w-6 h-6" />
        <Briefcase className="w-6 h-6" />
        <BarChart2 className="w-6 h-6" />
        <Grid className="w-6 h-6 md:hidden" />
      </div>
      <div className="hidden md:flex mt-auto flex-col gap-4">
        <Grid className="w-6 h-6 text-slate-400" />
      </div>
    </nav>
  )
};