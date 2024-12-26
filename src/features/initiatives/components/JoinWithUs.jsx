import { ButtonType } from "@/components/buttons/type";
import Button from "@/components/buttons/Button";
import DonateNow from "@/components/buttons/DonateNow";

export default function Join(){
    return(
        <section className=" layout-section-xl bg-secondary-yellow my-20">
            <div className=" text-center mx-auto max-w-4xl">

            <p className=" heading-2">Join with us</p>
            <p className=" text-lg">Join us in these initiatives and be a part of the positive change we are creating. Together, we can make a lasting impact on the environment, foster sustainability, and ensure a better future for all.</p>
           
           <div className=" mt-10 flex gap-5 justify-center">
           <Button type={ButtonType.primary_green}>Become a Partner</Button>
           <DonateNow type={ButtonType.primary} icon />

           </div>
           
            </div>
        </section>
    )
}