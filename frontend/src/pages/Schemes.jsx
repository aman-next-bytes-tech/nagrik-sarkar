import { useEffect, useState } from "react"
import DropDown  from '../assets/icons/arrow-down.png'
import AtalKisan from '../assets/schemes/atal_kisan_yojana.webp'

const contentData = [
    {
        heading : "Details",
        text : "The scheme “Atal Kisan Jyoti Yojana” launched by the Energy Department, Government of Madhya Pradesh, aims to provide concessional electricity to farmers through a flat rate power supply of ₹750/- per horsepower per year to metered agricultural pump consumers up to 10 horsepower."
    },
    {
        heading : "Benifits",
        text : "Electricity Supply at Concessional Rate: Farmers having metered permanent agricultural pumps up to 10 horsepower are provided electricity at a flat rate of ₹750/- per horsepower per year."
    }
]

const eligibility = [
    "The applicant must be a farmer", 
    "The applicant must be a permanent agricultural pump consumer", 
    "The applicant must have a metered connection",
    "The applicant’s pump capacity should be up to 10 horsepower"
]

const documentRequired = [
    "Id Proof", "Any other document as required by the authority"
]

const faq = [
    {
        question : "What is the objective of this scheme?",
        answer : "The scheme aims to provide electricity at concessional rates to farmers in Madhya Pradesh."
    },
    {
        question : "Who implements the scheme?",
        answer : "The scheme is implemented by the Horticulture and Food Processing Department, Government of Madhya Pradesh."
    }, 
    {
        question : "Who is eligible to benefit from this scheme?",
        answer : "Permanent metered agricultural pump consumers up to 10 horsepower are eligible for the benefit."
    },
    {
        question : "What is the rate of electricity supply under this scheme?",
        answer : "Electricity is supplied at a flat rate of ₹750/- per horsepower per year"
    },
    {
        question : "What type of benefit is provided under the scheme?",
        answer : "The benefit is provided in the form of a grant from the State Government."
    }, 
    {
        question : "Is this scheme available to all categories of farmers?",
        answer : "Yes, it is available to all General category farmers having metered agricultural pumps up to 10 horsepower.",
    },
    {
        question : "Is there any application process to avail of this scheme?",
        answer : "No, the benefit is automatically available to eligible consumers."
    },
    {
        question : "Is there any application fee?",
        answer : "No, there is no application fee for this scheme."
    },
    {
        question : "Can farmers with more than 10 horsepower pumps apply for this benefit?",
        answer : "No, only consumers with up to 10-horsepower pumps are eligible."
    },
    {
        question : "Who is the designated officer for this scheme?",
        answer : "The distribution center in-charge is the designated officer."
    }
]

const sections = [
    { id: "details", label: "Details" },
    { id: "benefits", label: "Benefits" },
    { id: "eligibility", label: "Eligibility" },
    { id: "documents", label: "Documents Required" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const Content = ({ activeSection , setActiveSection}) => {

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({
            behavior : 'smooth',
            block : 'top'
        })

        setActiveSection(id);
    };

    return (
        <ul className="space-y-2">
            {sections.map(({id, label}) => (
                <li 
                    key={id}
                    className={`cursor-pointer transition-all p-5 
                        ${activeSection === id 
                            ? "font-bold text-green-600"
                            : "text-grey-600"}
                    `} 
                    onClick={() => handleClick(id)}
                >
                    {label}
                </li>
            ))}
        </ul>
    )
}

const ContentCard = () => {
    return (
        <div className="sticky space-y-18">
            {contentData.map(({heading, text}) => (
                <div className="p-4" key={heading}>
                    <h3 className="text-xl font-bold mb-7">{heading}</h3>
                    <span >{text}</span>
                </div>
            ))}
        </div>
    )
}

const Eligibility = () => {
    return (
        <div className="space-y-8 p-4">
            <div>
                <h3 className="text-xl font-bold mb-7">Eligibility</h3>
                <ul className="list-disc ml-5">
                    {eligibility.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Documents = () => {
    return (
        <div className="space-y-8 p-4">
            <div>
                <h3 className="text-xl font-bold mb-7">Documents</h3>
                <ul className="list-disc ml-5">
                    {documentRequired.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(false);
    return (
        <div className="p-4">
            <div>
                <h3 className="text-xl font-bold mb-7">
                    Frequently Asked Questions ?
                </h3>

                {faq.map(({question, answer}, index) => (
                    <div 

                        key={index} 
                        className="mb-5"
                    >
                        <div 
                            className="flex "
                        >
                            <h3 
                                className="text-lg font-semibold mb-5 grow"
                            >
                                {question}
                            </h3>

                            <button 
                                className="max-w-[3%] max-h-[3%]" 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <img 
                                    src={DropDown} 
                                    alt="Show more"
                                    className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                        </div>
                        {openIndex === index && (
                            <p className="ml-2">{answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

const Tag = ({tags}) => {
    return (
        <div className="flex flex-row gap-5">
            {tags.map((item, index) =>
                <div 
                    className="border-[2px] rounded-xl px-1 text-sm text-green-600 border-green-500 hover:bg-green-400 pointer" 
                    key={index}
                >
                    {item}
                </div>
            )}
        </div>
    )
}

export const Schemes = () => {
    const [activeSection, setActiveSection] = useState("details");

    useEffect(() =>{
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0.2
            }
        );

        sections.forEach(({id}) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full flex gap-2 md:gap-6 p-6 top-0">

            {/* left side-bar */}
            <aside className="hidden md:flex w-fit-content sticky top-40 h-fit p-8">
                <Content activeSection={activeSection} setActiveSection={setActiveSection}/>
            </aside>

            {/* main content */}
            <main className="w-fit-content md:w-[60%]">
                <div className="space-y-5">
                    <img 
                        className="w-full max-h-[15rem]"
                        src={AtalKisan} 
                        alt="" />
                    <div 
                        className="p-4" 
                    >
                        <h2>Uttar Pradesh</h2>
                        <h3 className="text-xl font-bold mb-7">Atal Kisan Jyoti Yojana</h3>
                        <Tag tags={["Agricultural Pump", "Agriculture", "Farmer"]}></Tag>
                    </div>
                </div>

                <div id="details">
                    <ContentCard /> 
                </div>

                <div id="eligibility">
                    <Eligibility />
                </div>

                <div id="documents">
                    <Documents />
                </div>

                <div id="faq">
                    <Faq />
                </div>

            </main>
            <div className="hidden md:w-[20%] stickey top-0 left-0">
                right
            </div>
        </div>
    )
}