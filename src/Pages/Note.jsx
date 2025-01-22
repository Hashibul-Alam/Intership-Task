import React, { useState } from 'react';
import { MenuItem, Select, InputAdornment } from '@mui/material';
import { Add } from '@mui/icons-material';
import { BsFunnel } from "react-icons/bs";
import FilterListIcon from '@mui/icons-material/FilterList';
import DocumentCard from './Docum';

const initialNotes = [
  { id: 1, title: 'Product Team Meeting', date: '2023-03-05', img: '/note2.png',  user: 'Floyd Miles' ,category: "Monthly", des: `This monthly progress agenda is following this items: 
    `, des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products",
    type: "Product", },
  { id: 2, title: 'HR Interview', date: '2023-12-23', img: '/note1.png', user: 'Annette Black',category: "Monthly",
    type: "Product",des: `This monthly progress agenda is following this items: 
    `, des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products" },
  { id: 3, title: 'Monthly Team Progress',  date: '2023-01-31', img: '/note3.png',  user: 'Robert Fox',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `, des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products"  },
  { id: 4, title: 'Document Images', date: '2023-12-30', img: '/note2.png',  user: 'Cameron Williamson',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `, des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products"  },
  { id: 5, title: 'Document Images', date: '2023-12-30', img: '/note2.png',  user: 'Cameron Williamson',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `, des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products"  },
  { id: 6, title: 'Document Images', date: '2023-12-30', img: '/note2.png',  user: 'Cameron Williamson',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `, des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products"  },


  { id: 7, title: 'Document Images', date: '2023-12-30', img: '/note2.png', img2:"/Note.png", user: 'Cameron Williamson',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `  },
  { id: 8, title: 'Document Images', date: '2023-12-30', img: '/note2.png', img2:"/Note.png", user: 'Cameron Williamson',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `  },
  { id: 9, title: 'Document Images', date: '2023-12-30', img: '/note2.png', img2:"/Note.png", user: 'Cameron Williamson',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `  },
  { id: 10, title: 'Document Images', date: '2023-12-30', img: '/note2.png', user: 'Cameron Williamson',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `, des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products"  },
  { id: 11, title: 'Document Images', date: '2023-12-30', img: '/note2.png', user: 'Cameron Williamson',category: "Monthly",
    type: "Product", des: `This monthly progress agenda is following this items: 
    `, des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products"  },
];

const NotesApp = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const filteredNotes = notes
    .filter(note => (filter ? note.user === filter : true))
    .sort((a, b) => {
      if (sort === 'date') return new Date(b.date) - new Date(a.date);
      if (sort === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  const handleAddNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: `New Note ${notes.length + 1}`,
      date: new Date().toISOString().split('T')[0],
      img: '/note2.png',
      category: "Monthly",
      type: "Product",
      des: `This monthly progress agenda is following this items: 
      `,
      des2: "* Introduction to Newest Product Plan", des3: "* Monthly Revenue updates for each products" ,
      user: 'New User',
    };
    setNotes([newNote, ...notes]);
  };

  return (
    <div className="px-2 lg:px-6 pb-6">

     <div className='flex flex-col lg:flex-row justify-between border mb-7 px-3 items-center'>
      <h2 className='text-2xl font-medium text-primary '>Notes</h2>

      <div className="flex flex-col lg:flex-row items-center gap-4 my-3">
        <Select className='border border-primary'
          value= {filter}
          onChange={(e) => setFilter(e.target.value)}
          displayEmpty
          
          startAdornment={
            <InputAdornment position="start">
              <BsFunnel className='text-primary' />
            </InputAdornment>
          }
          size="small"
          sx={{
            fontSize: '14px', 
          }}
        >
          
          <MenuItem  value="">Filter</MenuItem>
          {[...new Set(notes.map(note => note.user))].map(user => (
            <MenuItem key={user} value={user}>
              {user}
            </MenuItem>
          ))}
        </Select>
        <Select className='border border-primary'
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          displayEmpty
          size="small"
           startAdornment={
            <InputAdornment position="start">
              <FilterListIcon className='text-primary' />
            </InputAdornment>
          }
          sx={{
            fontSize: '14px',
            
          }}
        >
          <MenuItem value="">No Sort</MenuItem>
          <MenuItem value="date">Sort by Date</MenuItem>
          <MenuItem value="title">Sort by Title</MenuItem>
        </Select>
        <button className='bg-primary text-xs lg:text-base py-1.5 px-3 rounded text-white'  onClick={handleAddNote}>
         <Add className='text-xs lg:text-[14px]' /> Add Note
        </button>
      </div>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {filteredNotes.map(note => (
          <div key={note.id} className="border border-[#E4E4E4] rounded-lg shadow-sm  max-w-[319px] min-h-[203px] ">
           <div className='ps-[22px] mr-4 mt-4'>
           <div className='flex items-center gap-[11px] '>
           <button className='bg-[#F7F7E8] px-[5px] py-[3px] rounded text-[#B1AB1D] font-medium'> { note.category } </button>
           <button className='bg-[#EDF2FE] px-[5px] py-[3px] rounded text-[#3083FF] font-medium'> { note.type } </button>
           </div>
            <div className=''>
            <h3 className="text-[14px] py-[10px] font-semibold relative">{note.title}</h3>
            <p className='text-[12px] pr-5 leading-[18px] text-[#727272] '>{note.des} <br/>
              <span > {note.des2} </span> <br/>
              <span> {note.des3} </span>
            </p>
            <div className="relative">
            {note.img2 && <img className='w-full h-16 object-cover' src={note.img2} alt={note.title} />}
      </div>
            </div>
           </div>
           <div className="flex items-center justify-between border-t pt-2">
            <div className='flex items-center gap-2 ps-[22px]'>
            <img  src={note.img} alt={note.title} />
            <p className='text-xs font-medium '>{note.user}</p>
            </div>
            <p className='pr-[22px] text-xs font-medium  text-[#727272] '>{note.date}</p>
            </div>
          </div>
        ))}
      </div>    
    </div>
    
  );
};

export default NotesApp;
