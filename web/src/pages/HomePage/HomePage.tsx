import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className={'max-w-[1280px] mx-auto'}>
        <h1 className={'text-2xl font-bold py-8'}>こけらのにわ</h1>
        <p className={'pb-8'}>
          ECCcomp. 23年度卒業予定. ネト研. ICTSC2021. Flutterとか.
          <br />
          RedwoodJS で試しに作ってみました。
        </p>
        <div className={'bg-white p-8 xl:rounded-lg'}>
          <h1>まだ記事がありません</h1>
          {/*<p className={'pt-8'}>テスト</p>*/}
        </div>
      </div>
    </>
  )
}

export default HomePage
