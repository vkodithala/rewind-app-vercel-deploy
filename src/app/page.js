import Image from 'next/image'
import CustomLineChart from './components/CustomLineChart'
import CustomRadarChart from './components/CustomRadarChart'
import JournalCard from './components/JournalCard'

export default function Home() {
  return (
    <main className=''>
      <p class="subpixel-antialiased underline flex justify-center text-3xl p-5 font-bold">Rewind</p>
        <div>
          <div className=''>
            <div className=''>
            <CustomLineChart />
            </div>
            <h2 className='flex justify-center text-2xl m-4 font-semibold'>Journal Entries</h2>
            <div className="flex flex-wrap justify-center">
              <JournalCard></JournalCard>
              <JournalCard></JournalCard>
              <JournalCard></JournalCard>
              <JournalCard></JournalCard>
              <JournalCard></JournalCard>
              <JournalCard></JournalCard>
            </div>
          </div>
        </div>
    </main>
  )
}
