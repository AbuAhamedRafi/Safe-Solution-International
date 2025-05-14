import SectionTitle from "../../components/SectionTitle";


const BlogDetails = () => {
  return (
    <div className=''>
      <SectionTitle title="Blog Details" />
      <div className="grid grid-cols-3 gap-5 p-5">
        <div className="col-span-1">
          <div className="bg-base-200 p-5 ">
            <h1 className="text-lg font-bold pb-5">Categories</h1>
            <ul className="space-y-3">
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                General Construction
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                Equipment Installation
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                Material Transport
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                Architectural Design
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                Painting & Finishing
              </li>
              <li className="border-b border-gray-200 p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                Plumbing Services
              </li>
              <li className="p-2 hover:text-green-500 cursor-pointer flex items-center gap-2">
                Urban Development
              </li>
            </ul>
          </div>
          <div className="bg-base-200 p-5 mt-10">
            <h1 className="text-lg font-bold pb-5">Popular Post</h1>
            <div className="space-y-2">
              <div className="flex gap-5 items-center border-b border-gray-200 pb-2">
                <img
                  src="https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <div>
                  <h3 className="font-bold">
                    Tools and Techniques for Modern Projects
                  </h3>
                  <p className="text-sm text-gray-500">May 16,2024</p>
                </div>
              </div>
              <div className="flex gap-5 items-center border-b border-gray-200 pb-2">
                <img
                  src="https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <div>
                  <h3 className="font-bold">
                    Tools and Techniques for Modern Projects
                  </h3>
                  <p className="text-sm text-gray-500">May 16,2024</p>
                </div>
              </div>
              <div className="flex gap-5 items-center border-b border-gray-200 pb-2">
                <img
                  src="https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <div>
                  <h3 className="font-bold">
                    Tools and Techniques for Modern Projects
                  </h3>
                  <p className="text-sm text-gray-500">May 16,2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="space-y-5">
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden group">
              {/* Image */}
              <img
                src="https://castro.jamstacktemplates.dev/assets/img/service/service-details-1.jpg"
                alt="blog image"
                className="w-full h-[400px] object-cover transition duration-700 ease-in-out"
              />
            </div>
            <p>By Admin - 30 October 2019 - 3 Comments</p>
            <h1 className="text-3xl font-bold">
              Smart Work Management: Tools and Techniques for Modern Projects
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
              sunt perspiciatis error id ipsa atque unde quis dolore nobis eum
              aperiam enim blanditiis pariatur inventore eius commodi
              consectetur ut. Totam, assumenda! Laboriosam possimus, corporis
              dicta!
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci
              dolorum, ab dolor, exercitationem praesentium dolorem quo
              voluptatum itaque dignissimos, sit esse cupiditate. Doloremque
              rerum similique a nobis placeat in illum, quo quaerat, ut
              repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo
              consequuntur reiciendis autem dicta consequatur earum beatae dolor
              distinctio, debitis repudiandae?
            </p>
            <p className="p-5 bg-gray-100 italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempora maiores impedit magnam pariatur repudiandae blanditiis
              eligendi hic ea perferendis voluptatem alias, asperiores quidem
              esse ipsam consectetur repellendus necessitatibus. Magni
              exercitationem a aliquid quidem impedit neque tempore magnam odio
              nisi, et quae esse quisquam officia in harum sed. Tempora, quia?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
              sunt perspiciatis error id ipsa atque unde quis dolore nobis eum
              aperiam enim blanditiis pariatur inventore eius commodi
              consectetur ut. Totam, assumenda! Laboriosam possimus, corporis
              dicta!
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci
              dolorum, ab dolor, exercitationem praesentium dolorem quo
              voluptatum itaque dignissimos, sit esse cupiditate. Doloremque
              rerum similique a nobis placeat in illum, quo quaerat, ut
              repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo
              consequuntur reiciendis autem dicta consequatur earum beatae dolor
              distinctio, debitis repudiandae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
