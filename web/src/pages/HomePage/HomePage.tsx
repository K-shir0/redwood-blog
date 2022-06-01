import { MetaTags } from '@redwoodjs/web'
import GitHub from './github.svg'
import Twitter from './twitter.svg'

const HomePage = () => {
  const kTitle = 'こけらのにわ 🏡'
  const kDescription = '材木を削る時に出る木片'
  const kTwitterLink = 'https://twitter.com/K_shir_0'
  const kGithubLink = 'https://github.com/K-shir0'
  const kProfile = (
    <>
      ECCcomp. 23年度卒業予定. ネト研. ICTSC2021. Flutterとか.
      <br />
      RedwoodJS で作成。
    </>
  )

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className={'max-w-[1280px] mx-auto'}>
        <div className={'xl:px-4 px-8'}>
          <h1 className={'text-2xl font-bold py-8'}>{kTitle}</h1>
          <p className={'pb-8'}>{kDescription}</p>
        </div>
        <div className={'grid grid-cols-12'}>
          <div className={'col-span-12 md:col-span-8 flex flex-col'}>
            <div className={'bg-white p-8 rounded-lg mx-4'}>
              <h1>まだ記事がありません</h1>
              {/*<p className={'pt-8'}>テスト</p>*/}
            </div>
          </div>
          <div className={'col-span-12 md:col-span-4'}>
            <div className={'md:px-4 px-12 pt-4'}>
              <p className={'text-lg font-bold'}>K-shir0</p>
              <p className={'pt-4 text-sm'}>{kProfile}</p>
              <div className={'flex flex-row pt-4'}>
                <a href={kTwitterLink}>
                  <div className={'h-6 w-6'}>
                    <Twitter />
                  </div>
                </a>
                <a href={kGithubLink}>
                  <div className={'h-6 w-6 pl-2'}>
                    <GitHub />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
