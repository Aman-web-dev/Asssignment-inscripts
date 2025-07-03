import { Search } from 'lucide-react'

function NavSearch() {
  return (
    <div className='h-8 bg-[#F6F6F6] rounded-lg flex flex-row items-center  gap-4 px-4 text-xs text-gray-600' >
    <Search height={12} width={12}/>
      <p>Search within Sheet</p>
    </div>
  )
}

export default NavSearch
