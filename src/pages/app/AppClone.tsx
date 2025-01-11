import { Button } from "@/components/ui/button";

const AppClone = () => {
  return (
    <>
      <div className="px-6 pt-6 pb-8">
        <h1 className="font-medium text-lg mb-8">App to Clone</h1>
        <div className="flex items-center gap-x-2">
          <img src="/savebill.svg" alt="" />
          <div>
            <h3 className="mb-2">Savebills</h3>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-2">
                <img src="/apple.svg" alt="" />
                <p className="text-sm">5starcompany.ios.bby</p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src="/andriod.svg" alt="" />
                <p className="text-sm">5starcompany.android.bby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-primary5" />

      <div className="px-6 py-10">
        <div className="mb-3">
          <AppCloneCard title="Website URL" desc="The webpage to display when your app loads." value="https://savebills.com.ng/" />
          <AppCloneCard title="App Name" desc="Your App Name is displayed on the device home screen." value="Save Bills" />
          <AppCloneCard title="Organization" desc="The Organization account where this new app will reside." value="Emmy's Team" />
        </div>

        <Button>Clone and Start Building!</Button>
      </div>

    </>
  )
}

export default AppClone


interface AppCloneCardProps {
  title: string;
  desc: string;
  value: string;
}

const AppCloneCard = ({ title, desc, value }: AppCloneCardProps) => {
  return (
    <div className="pb-9">
      <h3 className="font-medium text-lg mb-4 leading-5">{title}</h3>
      <p className="text-primary15 leading-6 mb-6">{desc}</p>
      <input type="text" readOnly defaultValue={value} className="border w-[80%] rounded-md p-2" />
    </div>
  )
}