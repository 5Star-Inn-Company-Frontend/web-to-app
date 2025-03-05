import { Text } from "../global/text";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type TPlan = {
    amount: string;
    type: string;
};
const plans: TPlan[] = [
    { amount: "0.00", type: "Free" },
    { amount: "10,000", type: "Gold" },
    { amount: "20,000", type: "Premium" },
];

export function Plan() {
    return (
        <>
            <div className="px-10 pt-8 border-b border-primary20">
                <Text style="font-medium text-4xl mb-4" value="Plan" />
            </div>
            <h3 className="mt-5 mx-10 mb-4 font-normal">Application</h3>
            <div>
                {plans.map((plan: TPlan) => (
                    <PlanCard planAmount={plan.amount} planType={plan.type} />
                ))}
            </div>
        </>
    );
}

interface IPlanCard {
    planAmount: string;
    planType: string;
}

const PlanCard = ({ planAmount, planType }: IPlanCard) => {
    return (
        <div className="py-8 px-10 border-b border-primary20 first:pt-0">
            <div className="mb-4 ">
                <Input value="5star Free license" className="border border-primary20 bg-primary30 px-4" />
            </div>
            <div className="border border-primary20 px-5 py-5 rounded-lg">
                <div className="mb-1 flex items-center justify-between">
                    <h6 className="mb-1">{planType} Plan</h6>
                    <Button className="text-xs h-7 px-8 rounded-xl">Add License</Button>
                </div>
                <h3 className="font-bold mb-3 text-lg">
                    #{planAmount} <span className="font-light text-xs">one-time payment</span>
                </h3>
                <p className="text-sm text-primary60">
                    A paid license is required to remove Median branding and to <br />
                    access advanced functionality including the JavaScript Bridge.
                </p>
            </div>
        </div>
    );
};
