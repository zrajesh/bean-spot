import Link from "next/link";

interface ParamProps {
    params: {
        id: string;
    };
}

const CoffeeStore = ({ params }: ParamProps ) => {
    console.log(params);
    
    return (
        <div>
            {params.id}
            <Link href="/">Back to home</Link>
        </div>
    );
};

export default CoffeeStore;