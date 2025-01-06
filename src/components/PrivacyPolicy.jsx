import React from "react";

const page = () => {
    return (
        <div className="w-full md:max-w-1440 mx-auto">
            <div className="flex flex-col gap-6  font-Montserrat text-base px-20 bg-black bg-opacity-90 text-white  md:text-lg">
                <h1 className="my-5 text-4xl sm:text-5xl font-bold mt-36">
                    Privacy Policy
                </h1>
                <p>
                    At Seerakku, we respect your privacy and are committed to
                    protecting it through this Privacy Policy. This document
                    outlines how we collect, use, and safeguard your personal
                    information when you interact with our platform and
                    services. By accessing our services, you agree to the
                    practices described in this Privacy Policy.
                </p>
                <p>
                    Please read this Privacy Policy carefully to understand our
                    views and practices regarding your personal data and how we
                    will handle it. If you do not agree with the terms outlined
                    in this policy, please do not use our platform.
                </p>

                <h2 className="text-2xl font-semibold my-4">Information We Collect</h2>
                <p>
                    Seerakku collects personal and non-personal information to
                    improve your experience and provide better services. The
                    types of information we may collect include:
                </p>

                <h3 className="text-xl font-semibold mt-4">1. Personal Information</h3>
                <ul className="list-disc flex flex-col gap-4 ml-6">
                    <li>Name, including first and last name.</li>
                    <li>Email address and alternate contact details.</li>
                    <li>Phone number and communication preferences.</li>
                    <li>Physical address, ZIP/postal code, and other location details.</li>
                    <li>Payment information, such as credit card or banking details, for transaction processing.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">2. Non-Personal Information</h3>
                <ul className="list-disc flex flex-col gap-4 ml-6">
                    <li>Browser type, operating system, and device information.</li>
                    <li>IP address and general location data.</li>
                    <li>Usage data, such as pages visited, links clicked, and time spent on the platform.</li>
                    <li>Referring website URLs and search queries.</li>
                </ul>

                <h2 className="text-2xl font-semibold my-4">How We Use Your Information</h2>
                <p>
                    Seerakku uses your information for the following purposes:
                </p>
                <ul className="list-disc flex flex-col gap-4 ml-6">
                    <li>
                        To personalize and enhance your experience on our
                        platform.
                    </li>
                    <li>To process transactions and deliver requested services.</li>
                    <li>To communicate with you regarding updates, promotions, and support.</li>
                    <li>To improve our platform, services, and user interface.</li>
                    <li>
                        To detect and prevent fraud, unauthorized access, or
                        other illegal activities.
                    </li>
                    <li>To comply with legal obligations and enforce our policies.</li>
                </ul>

                <h2 className="text-2xl font-semibold my-4">Sharing Your Information</h2>
                <p>
                    We do not sell or rent your personal information to third
                    parties. However, we may share your information in the
                    following scenarios:
                </p>
                <ul className="list-disc flex flex-col gap-4 ml-6">
                    <li>
                        With service providers and partners who assist us in
                        delivering our services, such as payment processors,
                        hosting providers, and analytics platforms.
                    </li>
                    <li>
                        With law enforcement or regulatory authorities, as
                        required by law or to protect the rights, safety, and
                        property of Seerakku and its users.
                    </li>
                    <li>
                        With your consent, for purposes not covered by this
                        Privacy Policy.
                    </li>
                    <li>
                        In the event of a business transfer, merger, or
                        acquisition, your information may be transferred to the
                        new entity.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold my-4">Cookies and Tracking Technologies</h2>
                <p>
                    Seerakku uses cookies and similar tracking technologies to
                    collect and analyze information about your usage of our
                    platform. Cookies help us:
                </p>
                <ul className="list-disc flex flex-col gap-4 ml-6">
                    <li>Understand user preferences and improve performance.</li>
                    <li>Remember login details and provide a seamless experience.</li>
                    <li>Deliver personalized content and advertisements.</li>
                </ul>
                <p>
                    You can manage your cookie preferences through your browser
                    settings. However, disabling cookies may impact your
                    experience on our platform.
                </p>

                <h2 className="text-2xl font-semibold my-4">Data Security</h2>
                <p>
                    Seerakku implements robust security measures to protect your
                    data from unauthorized access, alteration, or disclosure.
                    These measures include encryption, secure servers, and
                    regular security audits. However, no method of transmission
                    over the internet or electronic storage is completely
                    secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-semibold my-4">Your Rights and Choices</h2>
                <p>
                    You have the following rights regarding your personal
                    information:
                </p>
                <ul className="list-disc flex flex-col gap-4 ml-6">
                    <li>Access, update, or delete your personal data.</li>
                    <li>Opt-out of receiving promotional communications.</li>
                    <li>Request data portability or restriction of processing.</li>
                    <li>Withdraw consent for data collection and processing.</li>
                </ul>
                <p>
                    To exercise your rights, please contact us at
                    privacy@seerakku.com. We will respond to your requests in
                    accordance with applicable laws.
                </p>

                <h2 className="text-2xl font-semibold my-4">Policy Updates</h2>
                <p>
                    Seerakku reserves the right to update this Privacy Policy
                    periodically to reflect changes in our practices or legal
                    requirements. We will notify you of significant changes
                    through our platform or other appropriate channels.
                </p>

                <p>
                    If you have any questions or concerns about this Privacy
                    Policy or our data practices, please contact us at
                    support@seerakku.com.
                </p>
            </div>
        </div>
    );
};

export default page;
