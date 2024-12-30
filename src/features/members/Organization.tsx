import OrganizationCard from "./OrganizationCard"

const Organization = () => {
  return (
    <div className="mb-12">
          <h3 className="font-medium text-primary60 mb-5">My Organizations</h3>
          <div className="grid gap-y-4">
            <OrganizationCard teamName="Odejimi Samuel’s Team" />
            <OrganizationCard teamName="Emmy’s Team" />
          </div>
        </div>
  )
}

export default Organization