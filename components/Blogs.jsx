import { Container } from 'react-bootstrap'
import BlogCard from '@/components/BlogCard'
import CustomButton from '@/components/CustomButton'

import { fetchBlogs } from "@/services/blogService"

export default async function Blogs() {
    const blogs = await fetchBlogs();

    return (<>
        {blogs?.length > 0 && (
            <section className="bg-black blogs">
                <Container>
                    <h2 className="mb-5 sections-heading text-white">
                        Our Latest Blogs{" "}
                        <span className="blog-heading-border mt-2"></span>
                    </h2>
                    <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {blogs.slice(0, 3).map((blog, index) => (
                            <BlogCard blog={blog} key={index} blogStyle="dark" />
                        ))}
                    </ul>
                    <div className="d-flex justify-content-center mt-5">
                        <CustomButton
                            buttonText="See All Blogs"
                            link="/research"
                            buttonStyle="yellow-button"
                        />
                    </div>
                </Container>
            </section>
        )}
    </>)
}