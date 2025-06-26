import React from 'react'
import HeartPlus from "@/components/icons/HeartPlus";

function DonatePageLink() {
  const payment_url = "https://rzp.io/rzp/UEN4Gb0"

    return (
        <a href={payment_url}
        className={`py-3 px-5 text-lg font-medium hover:border-4 hover:px-4 hover:py-2 bg-primary text-black`}
        >
            Donate Now
            <span className="ms-3">
              <HeartPlus className="inline" fill={"black"} />
            </span>

        </a>
      )
}

export default DonatePageLink