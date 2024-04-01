import { useState, useEffect } from "react";
import { testimonial_cards } from "./asset";
import { TestimonialCard, TestimonialLoading, TestimonialModal } from "./index";
import data from "./data.json";

const TestimonialList = () => {
    const [modalVisible, setModalVisible] = useState({
        display: false,
        data: {},
    });
    const [testimonials, setTestimonials] = useState([...testimonial_cards]);
    const [loading, setLoading] = useState(false);

    const handleReadMoreClick = (testimony, image, name, year, post) => {
        setModalVisible({
            display: true,
            data: { testimony, image, name, year, post },
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
                if (loading) return;
                setLoading(true);
                setTimeout(() => {
                    setTestimonials((prevTestimonials) => [
                        ...prevTestimonials,
                        ...prevTestimonials.slice().sort(() => Math.random() - 0.5),
                    ]);
                    setLoading(false);
                }, 5000);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return (
        <>
            <div className="Testimonial-wrapper">
                <h1>{data.section1.title}</h1>
                <div className="card_wrapper">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            testimonial={testimonial}
                            handleReadMoreClick={handleReadMoreClick}
                        />
                    ))}
                </div>
                <TestimonialLoading />
                {modalVisible.display && (
                    <TestimonialModal
                        onClose={() => setModalVisible({display: false, data: {}})}
                        {...modalVisible.data} 
                    />
                )}
            </div>
        </>
    );
};

export default TestimonialList;
