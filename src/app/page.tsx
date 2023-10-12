import Image from 'next/image'
import Link from 'next/link'
import '../style/timetable.css'

export default function Home() {
  return (
    <main>
      <h2 className={"text-4xl text-violet-900"}>OMUCT_1-4</h2>
        <p className={"text-2xl text-slate-400 mb-4"}>時間割共有用Webアプリ</p>
        <div>
            <table className={"border-collapse table-fixed sm:w-full xl:w-[1024px] text-center"}>
                <thead>
                <tr>
                    <th colSpan={6} className={"border-y-4 border-stone-700 text-slate-700 text-3xl p-1.5"}>1年4組 後期時間割表</th>
                </tr>
                <tr className={"text-xl"}>
                    <th></th>
                    <th>月</th>
                    <th>火</th>
                    <th>水</th>
                    <th>木</th>
                    <th>金</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={"w-12"}>1</th>
                    <td rowSpan={2}><Link href={"/subjects/physics1"}>基礎物理1</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/information1"}>情報1</Link></td>
                    <td rowSpan={4}><Link href={"/subjects/practice"}>総合工学システム実験実習</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/japanese1"}>国語1</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/basic-math-b"}>基礎数学B</Link></td>
                </tr>
                <tr>
                    <th className={"w-12"}>2</th>
                </tr>
                <tr>
                    <th className={"w-12"}>3</th>
                    <td rowSpan={2}><Link href={"/subjects/english2"}>英語2</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/socialstudies1"}>社会1</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/english2"}>英語2</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/music"}>音楽</Link><br/>
                        <Link href={"/subjects/art"}>美術</Link><br/>
                        <Link href={"/subjects/calligraphy"}>書道</Link></td>
                </tr>
                <tr>
                    <th className={"w-12"}>4</th>
                </tr>
                <tr>
                    <td colSpan={6}>昼休み</td>
                </tr>
                <tr>
                    <th className={"w-12"}>5</th>
                    <td rowSpan={2}><Link href={"/subjects/basic-math-b"}>基礎数学B</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/chemistry1"}>化学1</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/english-expression1"}>英語表現1</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/basic-math-c"}>基礎数学C</Link></td>
                    <td rowSpan={2}><Link href={"/subjects/chemistry1"}>化学1</Link></td>
                </tr>
                <tr>
                    <th className={"w-12"}>6</th>
                </tr>
                <tr>
                    <th className={"w-12"}>7</th>
                    <td rowSpan={2}></td>
                    <td rowSpan={2}><Link href={"/subjects/pe1"}>保健体育1</Link></td>
                    <td><Link href={"subjects/hr"}>HR</Link></td>
                    <td colSpan={2} rowSpan={2}></td>
                </tr>
                <tr>
                    <th className={"w-12"}>8</th>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            高専祭用得点計算APPは
            <Link href={"/kosen-fes"} className={"text-indigo-700"}>
                こちら
            </Link>
        </div>
    </main>
  )
}
