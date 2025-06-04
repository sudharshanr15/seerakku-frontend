import { ButtonType } from "@/components/buttons/type";
import Button from "@/components/buttons/Button";
import DonateNow from "@/components/buttons/DonateNow";

export default function Join(){
    return(
        <section className=" xl:layout-section-xl  mb-10">
            <div className=" text-center mx-auto max-w-lg  p-10 bg-secondary-yellow lg:max-w-4xl">

            <p className=" heading-2">Let’s Build a Sustainable Future Together</p>
            <p className=" text-lg">Partner with Seerakku to amplify your organization’s environmental impact. Collaborate on initiatives like corporate volunteering, tree plantation drives, and eco-education programs to demonstrate your commitment to sustainability.</p>

           <div className=" mt-10 flex sm:flex-row flex-col gap-5 justify-center">
               <Button type={ButtonType.primary_green}>Become a Partner</Button>
           </div>

            </div>
        </section>
    )
}