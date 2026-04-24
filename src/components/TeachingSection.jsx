import { BookOpenText, Code, Youtube, BriefcaseBusiness, NotebookPen } from "lucide-react";
import { useState } from "react";

function getYearsDifference(targetDate) {
    const now = new Date();
    const date = new Date(targetDate);

    let years = now.getFullYear() - date.getFullYear();

    const hasHadAnniversaryThisYear =
    now.getMonth() > date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate());

    if (!hasHadAnniversaryThisYear) {
    years--;
    }

    return years;
}

export const TeachingSection = () => {
    const [cvDownloaded, setCvDownloaded] = useState(false);

    const handleCvDownload = () => {
        setCvDownloaded(true);
    };
    
    const years = getYearsDifference("2020-01-01");
    
    return (
        <section id="teaching" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    10 Years of Teaching <span className="text-primary"> Experience</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BookOpenText className="h-6 w-6  text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> <span className="text-primary-emphasis">Assistant Lecturer</span> (2024 - 2025)</h4>
                                    <p className="text-muted-foreground">
                                        FIT5222 - Automated Planning and Reasoning, Monash University.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BriefcaseBusiness className="h-6 w-6  text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> <span className="text-primary-emphasis">Admin Teaching Assistant</span> (2022 - 2026)</h4>
                                    <p className="text-muted-foreground">
                                        FIT5222 - Automated Planning and Reasoning, Monash University.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* <div className="p-3 rounded-full bg-primary/10">
                                    <NotebookPen className="h-6 w-6  text-primary"/>
                                </div> */}
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> <span className="text-primary-emphasis">Units Taught</span> (2020 - 2026)</h4>
                                    <p className="text-muted-foreground">
                                        FIT5222 (x4): Automated Planning and Reasoning.
                                    </p>
                                    <p className="text-muted-foreground">
                                        FIT5047 (x1): Foundations of AI.
                                    </p>
                                    <p className="text-muted-foreground">
                                        FIT1045 (x4): Introduction to Computer Science.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <NotebookPen className="h-6 w-6  text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> <span className="text-primary-emphasis">Private Tutoring</span> (2017 - 2019)</h4>
                                    <p className="text-muted-foreground">
                                        High school Mathematics and Physics. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};