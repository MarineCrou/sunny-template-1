const posts = [
  {
    id: 1,
    title: "Thérapie relationnelle",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://static.wixstatic.com/media/28fed2f3c95f4589a1259daaedda1b0f.jpg/v1/fill/w_392,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Conseils.jpg",
  },
  {
    id: 2,
    title: "Thérapies Cognitivo-Comportementales (TCC)",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://media.istockphoto.com/id/1219330382/fr/photo/psychiatre-f%C3%A9minine-ayant-la-relation-client-femme-%C3%A0-discuter-des-probl%C3%A8mes-et-des-progr%C3%A8s.jpg?s=612x612&w=0&k=20&c=NEZhjDVlj6Ok2lVwVww43baaC8p8ZeJUsf5X7mdJT9Y=",
  },
  {
    id: 3,
    title: "EMDR (Eye Movement Desensitization and Reprocessing)",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://static.wixstatic.com/media/487e188a0c8844faa1dbe2cffcf5e8e2.jpg/v1/fill/w_392,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/yeux%20bleus.jpg",
  },
  {
    id: 4,
    title: "Hypnose",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://static.wixstatic.com/media/7cd8af9edd354a76953332afc8fa7375.jpg/v1/fill/w_392,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hypnose.jpg",
  },
  {
    id: 5,
    title: "Thérapie à Médiation Animale",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://static.wixstatic.com/media/30c3d8_e212168ed8fa48a5a8af1d3aa3ecf9fd~mv2_d_3227_2143_s_2.jpg/v1/fill/w_392,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7034-2.jpg",
  },
  {
    id: 6,
    title: "Art Therapie",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://media.istockphoto.com/id/1351066983/fr/photo/groupe-de-personnes-dans-latelier-de-poterie.jpg?s=612x612&w=0&k=20&c=ocWX6vEKpS76898MlJ1X6tSIsHO9Tp45kVsVzLfEDJE=",
  },
];

export default function IndividualTherapySection() {
  return (
    <div className="bg-stone-50 pb-24 sm:pt-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Individual Therapies
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Find out which type of therapy is best for you.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-amber-600">
                    <div>
                      <span className="absolute inset-0" />
                      {post.title}
                    </div>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
