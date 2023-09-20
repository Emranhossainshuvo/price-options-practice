import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


    const price_options = [
        {
            "id": "1",
            "name": "Basic Membership",
            "features": [
                "Access to cardio and weightlifting areas",
                "Unlimited locker room access",
                "10% discount on personal training sessions"
            ],
            "price": "$29.99 per month"
        },
        {
            "id": "2",
            "name": "Premium Membership",
            "features": [
                "Access to all gym facilities 24/7",
                "Unlimited locker room access",
                "Access to group fitness classes",
                "Free initial fitness assessment",
                "15% discount on personal training sessions"
            ],
            "price": "$49.99 per month"
        },
        {
            "id": "3",
            "name": "Family Membership",
            "features": [
                "Access for two adults and two children",
                "Access to all gym facilities 24/7",
                "Unlimited locker room access",
                "Access to group fitness classes",
                "Free initial fitness assessment for each member",
                "20% discount on personal training sessions"
            ],
            "price": "$89.99 per month"
        }
    ]



    return (
        <div>
            <h2 className="text3xl">Best price in the city</h2>
            <div className="md:grid md:grid-cols-2 gap-3 lg:grid-cols-3">
                {
                    price_options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;