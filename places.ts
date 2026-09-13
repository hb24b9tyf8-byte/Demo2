--- src/data/places.ts (原始)
export interface Place {
  id: number;
  name: string;
  subtitle: string;
  year: string;
  description: string;
  history: string;
  images: string[];
  category: string;
}

export const places: Place[] = [
  {
    id: 1,
    name: "Bangalore Palace",
    subtitle: "The Tudor Marvel of the East",
    year: "1887",
    description: "A magnificent palace inspired by England's Windsor Castle, built by the Wodeyar dynasty.",
    history: "Bangalore Palace was built in 1887 by Maharaja Chamarajendra Wadiyar, inspired by England's Windsor Castle. The palace features Tudor-style architecture with fortified towers, arches, green lawns, and elegant wood carvings. Originally, the land belonged to a British clerk named J. D. H. Rev. J. Garrett. The Maharaja purchased it for Rs. 40,000 and commissioned the construction of the palace. The interior boasts teak wood furniture, paintings, chandeliers, and trophies from hunting expeditions. During British rule, it served as a detention center for political prisoners during the freedom struggle. The palace has been home to five generations of the Wodeyar dynasty and remains a testament to the grandeur of Mysore royalty in Bangalore.",
    images: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 2,
    name: "Lalbagh Botanical Garden",
    subtitle: "A Living Legacy of Green Splendour",
    year: "1860",
    description: "One of the richest botanical gardens in India, spanning 240 acres of verdant beauty.",
    history: "Lalbagh Botanical Garden was established in 1860 by Hyder Ali and later expanded by his son Tipu Sultan. The garden was further developed under the supervision of legendary botanist Gustav Hermann Krumbiegel, who served as its superintendent from 1908 to 1916. The garden houses over 1,800 species of plants, including rare species from France, Japan, and Africa. The iconic glasshouse, built in 1942, was modeled after London's Crystal Palace and hosts the famous flower shows during Republic Day and Independence Day. The garden also contains the tomb of Katharina, the wife of Sir Mark Cubbon, who was the longest-serving commissioner of Bangalore. The Lalbagh has been a center for botanical research and conservation for over 160 years.",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9790b3feeeaa?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 3,
    name: "Cubbon Park",
    subtitle: "The Emerald Heart of the City",
    year: "1870",
    description: "A 300-acre green oasis in the heart of Bangalore, named after Sir Mark Cubbon.",
    history: "Cubbon Park was established in 1870 by Major General Richard Sankey, then Chief Engineer of Mysore State. It was originally named Meade's Park after Sir John Meade, the Acting Commissioner of Mysore, but was later renamed in honour of Sir Mark Cubbon, the longest-serving commissioner of Bangalore. The park spans 300 acres and houses over 6,000 trees and plants. It is home to several important buildings including the High Court of Karnataka, the State Central Library, and the Government Museum. The park was designed with a grid pattern of pathways, creating a formal garden layout. Over the decades, it has served as a lung space for the growing city and a peaceful retreat for citizens seeking respite from urban life.",
    images: [
      "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800&q=80",
      "https://images.unsplash.com/photo-1588714477688-726b58d1c3a4?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 4,
    name: "Tipu Sultan's Summer Palace",
    subtitle: "The Abode of the Tiger of Mysore",
    year: "1791",
    description: "A magnificent teak wood palace adorned with exquisite Mughal frescoes and intricate carvings.",
    history: "Tipu Sultan's Summer Palace, also known as the Dariya Daulat Bagh, was built in 1791 by Tipu Sultan, the ruler of Mysore. The palace is a fine example of Indo-Islamic architecture, built entirely of teak wood with ornate pillars, carved arches, and beautiful frescoes depicting Tipu Sultan's victory over the British at the Battle of Pollilur. The palace was originally built as a retreat from the summer heat. Its walls are adorned with intricate floral patterns and battle scenes painted in vivid colours. After Tipu Sultan's death in the Fourth Anglo-Mysore War in 1799, the British used the palace as a secretariat. The palace houses a museum with artifacts from Tipu Sultan's era, including coins, paintings, and weapons.",
    images: [
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 5,
    name: "Vidhana Soudha",
    subtitle: "The Seat of Legislative Power",
    year: "1956",
    description: "An imposing granite structure that serves as the state legislature, blending Dravidian and Indo-Saracenic styles.",
    history: "Vidhana Soudha was constructed between 1951 and 1956 under the supervision of Kengal Hanumanthaiah, the then Chief Minister of Mysore State. The building was designed to house the state legislature and is considered one of the finest examples of Neo-Dravidian architecture. Built with granite and porphyritic gneiss, the four-storey structure has 240 columns, 45 doors, and over 300 rooms. The iconic dome at the centre is inspired by the Gol Gumbaz of Bijapur. The building's inscription 'Government's Work is God's Work' in Kannada adorns its facade. Hanumanthaiah was inspired by the Palace of Westminster in London and the Taj Mahal, creating a unique fusion of architectural styles that represents Karnataka's cultural heritage.",
    images: [
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
    ],
    category: "Architecture"
  },
  {
    id: 6,
    name: "Bannerghatta National Park",
    subtitle: "Where the Wild Roams Free",
    year: "1970",
    description: "A sprawling national park and biological reserve, home to diverse wildlife and a renowned safari.",
    history: "Bannerghatta National Park was established in 1970 and declared a national park in 1974. Located about 22 km from Bangalore, it spans over 25,000 acres of forested area. The park is home to a rich variety of wildlife including Bengal tigers, Indian elephants, leopards, and over 100 species of birds. In 1988, a portion of the park was declared as a biological reserve. The park features India's first butterfly park, established in 2002, which houses over 20 species of butterflies. The safari within the park offers visitors a chance to see animals in their natural habitat. The park also has ancient temples and a fort within its premises, dating back to the Hoysala period, adding historical significance to its natural beauty.",
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
      "https://images.unsplash.com/photo-1535338454528-1b5c8e9b1683?w=800&q=80",
      "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 7,
    name: "ISKCON Temple",
    subtitle: "A Spiritual Sanctuary of Devotion",
    year: "1997",
    description: "A magnificent temple complex dedicated to Lord Krishna, showcasing stunning architecture and spiritual serenity.",
    history: "The ISKCON Temple in Bangalore, officially known as the Sri Radha Krishna-Chandra Temple, was inaugurated in 1997 by Dr. M. Channa Reddy, the then Governor of Karnataka. The temple was built on a hill in Rajajinagar, spanning 3 acres of land. The architecture blends traditional South Indian temple design with modern construction techniques. The temple complex features a stunning main shrine housing deities of Radha Krishna, along with halls for cultural programs, a museum, and a restaurant serving satvik food. The temple was envisioned by its founder Acharya Bhaktivedanta Swami Prabhupada as a centre for spiritual education and cultural preservation. It has since become one of the largest ISKCON temples in the world, attracting millions of devotees and tourists annually.",
    images: [
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80",
      "https://images.unsplash.com/photo-1545126178-862cdb469459?w=800&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
    ],
    category: "Spiritual"
  },
  {
    id: 8,
    name: "Nandi Hills",
    subtitle: "The Ancient Hill Fortress",
    year: "9th Century",
    description: "An ancient hill fortress offering breathtaking sunrise views and a cool retreat from the city.",
    history: "Nandi Hills, located about 60 km from Bangalore, derives its name from the ancient Nandi (bull) temple at its summit. The hill fort has a history dating back to the 9th century when it was built by the Western Ganga Dynasty. Later, it was renovated by Tipu Sultan, who used it as a summer retreat. The fort features several structures including the Tipu's Drop, a cliff from which prisoners were allegedly thrown to their death, and the Amrita Sarovar, a perennial lake. The Yoga Nandeeshwara temple at the top is an exquisite example of Dravidian architecture. The British used the hills as a sanatorium during colonial rule. The hill station offers panoramic views of the surrounding plains and is famous for its spectacular sunrise and sunset views.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 9,
    name: "Ulsoor Lake",
    subtitle: "The City's Reflecting Mirror",
    year: "1882",
    description: "One of the oldest lakes in Bangalore, offering boating and a peaceful escape amidst the urban sprawl.",
    history: "Ulsoor Lake, also known as Halasuru Lake, is one of the oldest lakes in Bangalore, dating back to the reign of Kempe Gowda II in the 16th century. The lake was further developed by Sir Lewin Bentham Bowring, the then Commissioner of Bangalore, in 1882. Spanning 121 acres, it is the largest lake within the city limits. The lake was originally created for irrigation purposes and later became a recreational spot. The adjacent Ulsoor area is one of the oldest residential localities in Bangalore. The lake has undergone several restoration efforts over the years to combat pollution and encroachment. Today, it offers boating facilities, a well-maintained promenade, and serves as a habitat for various bird species, making it a popular spot for morning walkers and nature enthusiasts.",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80",
      "https://images.unsplash.com/photo-1470770841497-7b319555f8ad?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 10,
    name: "Bull Temple",
    subtitle: "The Sacred Nandi Abode",
    year: "1537",
    description: "An ancient temple housing a massive monolithic bull statue, built in traditional Dravidian style.",
    history: "The Bull Temple, also known as the Nandi Temple, was built in 1537 by Kempe Gowda I, the founder of Bangalore. The temple is dedicated to Nandi, the sacred bull and vehicle of Lord Shiva. The centerpiece of the temple is a massive monolithic granite statue of Nandi, measuring 4.5 metres in height and 6 metres in length. The statue was carved from a single boulder and is one of the largest Nandi statues in India. The temple is built in the traditional Dravidian architectural style with a pillared hall and a sanctum sanctorum. Every year, the Groundnut Festival (Kadalekai Parishe) is held in the temple premises, attracting thousands of farmers and visitors. The temple has been renovated several times over the centuries while maintaining its original character.",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1545126178-862cdb469459?w=800&q=80"
    ],
    category: "Spiritual"
  },
  {
    id: 11,
    name: "Commercial Street",
    subtitle: "The Grand Bazaar of Bangalore",
    year: "1900s",
    description: "A legendary shopping destination that has been the commercial heartbeat of Bangalore for over a century.",
    history: "Commercial Street emerged as a major shopping hub during the early 20th century when Bangalore was expanding under British administration. The street was developed as a planned commercial area to cater to the growing needs of the city's residents. Over the decades, it has evolved into one of Bangalore's most iconic shopping destinations, housing hundreds of shops selling everything from traditional silk sarees and jewellery to modern fashion and electronics. The street's architecture reflects the colonial-era planning with wide pavements and row-style shops. During the freedom movement, it served as a gathering point for political discussions. The area around Commercial Street, including Mission Road and Church Street, formed the cultural and intellectual hub of old Bangalore. Today, it remains a favourite destination for both locals and tourists seeking the authentic Bangalore shopping experience.",
    images: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80"
    ],
    category: "Shopping"
  },
  {
    id: 12,
    name: "Bangalore Fort",
    subtitle: "The Mud Fortress of Yore",
    year: "1537",
    description: "The remnants of the original fort built by Kempe Gowda I, witnessing centuries of Bangalore's history.",
    history: "Bangalore Fort was originally built as a mud fort by Kempe Gowda I in 1537, the founder of Bangalore. The fort was later rebuilt in stone by Hyder Ali in 1761. The fort played a crucial role in the Anglo-Mysore Wars and was captured by the British forces led by Lord Cornwallis in 1791 during the Third Anglo-Mysore War. The fort originally had eight gates, but today only the Delhi Gate remains. The fort walls once enclosed the entire pete (market area) of old Bangalore. Within the fort complex, there are remnants of a palace, a Ganapati temple, and wells that once supplied water to the garrison. The fort witnessed many historical events including the imprisonment of Tipu Sultan's family after his death. Today, the remaining structures serve as a reminder of Bangalore's military past and the city's evolution from a fortified settlement to a modern metropolis.",
    images: [
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 13,
    name: "Jawaharlal Nehru Planetarium",
    subtitle: "Gateway to the Cosmos",
    year: "1989",
    description: "One of India's premier planetariums, igniting curiosity about the universe since 1989.",
    history: "The Jawaharlal Nehru Planetarium was established in 1989 under the aegis of the Bangalore Association for Science Education (BASE). Named after India's first Prime Minister, Jawaharlal Nehru, who was a strong advocate for scientific temper, the planetarium was built to promote astronomy and space science education. The building features a distinctive dome-shaped structure designed to house a state-of-the-art projection system. The planetarium conducts regular sky shows that take visitors on virtual journeys through the solar system, galaxies, and the cosmos. It also hosts astronomy workshops, exhibitions, and lectures by eminent scientists. The planetarium has played a significant role in inspiring generations of young astronomers and scientists in Karnataka. Its location near the High Court and Cubbon Park makes it part of the cultural and educational hub of Bangalore.",
    images: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    ],
    category: "Science"
  },
  {
    id: 14,
    name: "Visvesvaraya Museum",
    subtitle: "Temple of Science and Innovation",
    year: "1962",
    description: "A science and technology museum honouring Sir M. Visvesvaraya, the father of Indian engineering.",
    history: "The Visvesvaraya Industrial and Technological Museum (VITM) was established in 1962 by the Government of India in honour of Sir Mokshagundam Visvesvaraya, the eminent engineer and statesman. Located on Kasturba Road, the museum was the brainchild of the National Council of Science Museums. Sir Visvesvaraya, born in 1860 in Mysore, was the first Indian to receive a British knighthood and served as the Diwan of Mysore State. The museum houses exhibits on various scientific and industrial topics including electricity, space, biotechnology, and engineering. It features working models, interactive displays, and scientific instruments that demonstrate fundamental principles of science and technology. The museum has been instrumental in fostering scientific curiosity among students and the general public for over six decades, serving as an important educational institution in Bangalore.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
    ],
    category: "Science"
  },
  {
    id: 15,
    name: "Dodda Ganapathi Temple",
    subtitle: "The Grand Shrine of the Elephant God",
    year: "16th Century",
    description: "A revered temple dedicated to Lord Ganesha, known for its massive idol and spiritual significance.",
    history: "The Dodda Ganapathi Temple in Basavanagudi is one of the most ancient and revered temples in Bangalore, dating back to the 16th century. The temple was built during the Vijayanagara period and has been a centre of devotion to Lord Ganesha for centuries. The main deity is a massive idol of Lord Ganesha, carved from a single stone, measuring approximately 6 feet in height and 8 feet in width. The temple underwent significant renovation in the early 20th century when the idol was reinstalled with great ceremony. The annual Karaga Festival and the Ganesh Chaturthi celebrations at this temple attract thousands of devotees. The temple's architecture reflects the traditional Dravidian style with a towering gopuram and intricately carved pillars. The temple complex also houses shrines dedicated to other deities including Lord Shiva and Goddess Lakshmi.",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      "https://images.unsplash.com/photo-1545126178-862cdb469459?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80"
    ],
    category: "Spiritual"
  },
  {
    id: 16,
    name: "Rangoli Metro Art Center",
    subtitle: "Where Art Meets Transit",
    year: "2011",
    description: "A unique art gallery within the Majestic metro station, showcasing contemporary and traditional Indian art.",
    history: "The Rangoli Metro Art Center, located within the Majestic metro station (Nadaprabhu Kempegowda Station), was established as part of Bangalore Metro's initiative to integrate art with public transportation. The gallery was conceptualized to bring art closer to the common man, making it accessible to the millions of daily commuters. The center hosts rotating exhibitions featuring works by established and emerging artists from Karnataka and across India. The gallery space showcases a diverse range of art forms including paintings, sculptures, installations, and photography. It has become a platform for promoting contemporary Indian art while also preserving traditional art forms. The initiative was inspired by similar art-in-transit programs in cities like Paris, London, and New York. Rangoli has organized numerous art workshops, artist talks, and cultural events, contributing to Bangalore's vibrant art scene.",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
    ],
    category: "Art & Culture"
  },
  {
    id: 17,
    name: "Lumbini Garden",
    subtitle: "A Lakeside Paradise of Tranquillity",
    year: "1990s",
    description: "A beautifully landscaped garden along the banks of Nagawara Lake, perfect for evening strolls.",
    history: "Lumbini Garden is a sprawling landscaped garden situated along the banks of Nagawara Lake in northern Bangalore. Named after the sacred garden in Nepal where Buddha was born, the park was developed as part of Bangalore's initiative to create recreational spaces around its many lakes. The garden features well-maintained lawns, walking paths, fountains, and seating areas that offer a peaceful retreat from the city's hustle. The adjacent Nagawara Lake has been a part of Bangalore's water system for centuries, and efforts to rejuvenate the lake and its surroundings led to the creation of this beautiful garden. The park has become a popular spot for families, joggers, and photography enthusiasts. Its location near the Outer Ring Road makes it easily accessible, and it has hosted numerous cultural events and community gatherings over the years.",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9790b3feeeaa?w=800&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 18,
    name: "Government Museum",
    subtitle: "Vault of Karnataka's Heritage",
    year: "1865",
    description: "The oldest museum in Bangalore, housing archaeological treasures and artefacts spanning millennia.",
    history: "The Government Museum in Bangalore was established in 1865, making it one of the oldest museums in India. Located within the Cubbon Park premises, the museum was initially set up by the Mysore Government to preserve and display artifacts of historical and archaeological significance. The museum houses a remarkable collection of stone sculptures, copper inscriptions, ancient coins, and artifacts from the Indus Valley Civilization. The museum's collection spans various periods including the Hoysala, Vijayanagara, and Chalukya dynasties. Among its prized possessions are sculptures from the Halebidu and Belur temples, terracotta figurines, and a collection of arms and armour. The museum also features exhibits on the natural history of Karnataka, including specimens of flora and fauna. Over its 150-year history, the museum has served as an important center for research and education about South Indian heritage.",
    images: [
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 19,
    name: "Devanahalli Fort",
    subtitle: "Birthplace of the Tiger",
    year: "1500s",
    description: "The historic fort near the airport, birthplace of Tipu Sultan, standing as a reminder of a glorious era.",
    history: "Devanahalli Fort, located about 35 km from Bangalore near the international airport, has a rich history dating back to the 1500s. The fort was originally built by the Morasu Wodeyars, a local chieftain family. It later came under the control of Hyder Ali and his son Tipu Sultan, who was born here in 1750. The fort was captured by the British in 1791 during the Third Anglo-Mysore War. The fort is constructed of stone and spans about 11 acres, with walls that are still largely intact. Within the fort complex, there are several ancient temples including the Venugopalaswamy temple and the Chandramouleshwara temple, both fine examples of Vijayanagara architecture. The fort also houses a memorial dedicated to Tipu Sultan. The Devanahalli area is also known for the Devanahalli pomelo, a unique citrus fruit that has received GI tag status.",
    images: [
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 20,
    name: "Art of Living International Center",
    subtitle: "A Sanctuary of Inner Peace",
    year: "1986",
    description: "A sprawling 300-acre campus dedicated to meditation, yoga, and holistic well-being on the city's outskirts.",
    history: "The Art of Living International Center was established in 1986 by Sri Sri Ravi Shankar on a sprawling 300-acre campus in Kanakapura Road, on the outskirts of Bangalore. The center serves as the global headquarters of the Art of Living Foundation, a humanitarian and spiritual organization present in over 150 countries. The campus features meditation halls, yoga centers, an Ayurvedic wellness center, and beautiful gardens. The center's architecture blends traditional Indian design with modern sustainability principles. It hosts the annual World Culture Festival and regular meditation courses including the Sudarshan Kriya, a powerful breathing technique. The campus also includes a school, a hospital, and organic farms. Over the decades, millions of people from around the world have visited the center seeking spiritual growth and inner peace. The center has played a significant role in putting Bangalore on the global map as a center for spiritual tourism.",
    images: [
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
    ],
    category: "Spiritual"
  }
];


+++ src/data/places.ts (修改后)
export interface Place {
  id: number;
  name: string;
  subtitle: string;
  year: string;
  description: string;
  history: string;
  images: string[];
  category: string;
}

export const places: Place[] = [
  {
    id: 1,
    name: "Bangalore Palace",
    subtitle: "The Tudor Marvel of the East",
    year: "1887",
    description: "A magnificent palace inspired by England's Windsor Castle, built by the Wodeyar dynasty.",
    history: "Bangalore Palace was built in 1887 by Maharaja Chamarajendra Wadiyar, inspired by England's Windsor Castle. The palace features Tudor-style architecture with fortified towers, arches, green lawns, and elegant wood carvings. Originally, the land belonged to a British clerk named J. D. H. Rev. J. Garrett. The Maharaja purchased it for Rs. 40,000 and commissioned the construction of the palace. The interior boasts teak wood furniture, paintings, chandeliers, and trophies from hunting expeditions. During British rule, it served as a detention center for political prisoners during the freedom struggle. The palace has been home to five generations of the Wodeyar dynasty and remains a testament to the grandeur of Mysore royalty in Bangalore.",
    images: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 2,
    name: "Lalbagh Botanical Garden",
    subtitle: "A Living Legacy of Green Splendour",
    year: "1860",
    description: "One of the richest botanical gardens in India, spanning 240 acres of verdant beauty.",
    history: "Lalbagh Botanical Garden was established in 1860 by Hyder Ali and later expanded by his son Tipu Sultan. The garden was further developed under the supervision of legendary botanist Gustav Hermann Krumbiegel, who served as its superintendent from 1908 to 1916. The garden houses over 1,800 species of plants, including rare species from France, Japan, and Africa. The iconic glasshouse, built in 1942, was modeled after London's Crystal Palace and hosts the famous flower shows during Republic Day and Independence Day. The garden also contains the tomb of Katharina, the wife of Sir Mark Cubbon, who was the longest-serving commissioner of Bangalore. The Lalbagh has been a center for botanical research and conservation for over 160 years.",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9790b3feeeaa?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 3,
    name: "Cubbon Park",
    subtitle: "The Emerald Heart of the City",
    year: "1870",
    description: "A 300-acre green oasis in the heart of Bangalore, named after Sir Mark Cubbon.",
    history: "Cubbon Park was established in 1870 by Major General Richard Sankey, then Chief Engineer of Mysore State. It was originally named Meade's Park after Sir John Meade, the Acting Commissioner of Mysore, but was later renamed in honour of Sir Mark Cubbon, the longest-serving commissioner of Bangalore. The park spans 300 acres and houses over 6,000 trees and plants. It is home to several important buildings including the High Court of Karnataka, the State Central Library, and the Government Museum. The park was designed with a grid pattern of pathways, creating a formal garden layout. Over the decades, it has served as a lung space for the growing city and a peaceful retreat for citizens seeking respite from urban life.",
    images: [
      "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=800&q=80",
      "https://images.unsplash.com/photo-1588714477688-726b58d1c3a4?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 4,
    name: "Tipu Sultan's Summer Palace",
    subtitle: "The Abode of the Tiger of Mysore",
    year: "1791",
    description: "A magnificent teak wood palace adorned with exquisite Mughal frescoes and intricate carvings.",
    history: "Tipu Sultan's Summer Palace, also known as the Dariya Daulat Bagh, was built in 1791 by Tipu Sultan, the ruler of Mysore. The palace is a fine example of Indo-Islamic architecture, built entirely of teak wood with ornate pillars, carved arches, and beautiful frescoes depicting Tipu Sultan's victory over the British at the Battle of Pollilur. The palace was originally built as a retreat from the summer heat. Its walls are adorned with intricate floral patterns and battle scenes painted in vivid colours. After Tipu Sultan's death in the Fourth Anglo-Mysore War in 1799, the British used the palace as a secretariat. The palace houses a museum with artifacts from Tipu Sultan's era, including coins, paintings, and weapons.",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 5,
    name: "Vidhana Soudha",
    subtitle: "The Seat of Legislative Power",
    year: "1956",
    description: "An imposing granite structure that serves as the state legislature, blending Dravidian and Indo-Saracenic styles.",
    history: "Vidhana Soudha was constructed between 1951 and 1956 under the supervision of Kengal Hanumanthaiah, the then Chief Minister of Mysore State. The building was designed to house the state legislature and is considered one of the finest examples of Neo-Dravidian architecture. Built with granite and porphyritic gneiss, the four-storey structure has 240 columns, 45 doors, and over 300 rooms. The iconic dome at the centre is inspired by the Gol Gumbaz of Bijapur. The building's inscription 'Government's Work is God's Work' in Kannada adorns its facade. Hanumanthaiah was inspired by the Palace of Westminster in London and the Taj Mahal, creating a unique fusion of architectural styles that represents Karnataka's cultural heritage.",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
    ],
    category: "Architecture"
  },
  {
    id: 6,
    name: "Bannerghatta National Park",
    subtitle: "Where the Wild Roams Free",
    year: "1970",
    description: "A sprawling national park and biological reserve, home to diverse wildlife and a renowned safari.",
    history: "Bannerghatta National Park was established in 1970 and declared a national park in 1974. Located about 22 km from Bangalore, it spans over 25,000 acres of forested area. The park is home to a rich variety of wildlife including Bengal tigers, Indian elephants, leopards, and over 100 species of birds. In 1988, a portion of the park was declared as a biological reserve. The park features India's first butterfly park, established in 2002, which houses over 20 species of butterflies. The safari within the park offers visitors a chance to see animals in their natural habitat. The park also has ancient temples and a fort within its premises, dating back to the Hoysala period, adding historical significance to its natural beauty.",
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
      "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80",
      "https://images.unsplash.com/photo-1472396961694-9a5f49a4842a?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 7,
    name: "ISKCON Temple",
    subtitle: "A Spiritual Sanctuary of Devotion",
    year: "1997",
    description: "A magnificent temple complex dedicated to Lord Krishna, showcasing stunning architecture and spiritual serenity.",
    history: "The ISKCON Temple in Bangalore, officially known as the Sri Radha Krishna-Chandra Temple, was inaugurated in 1997 by Dr. M. Channa Reddy, the then Governor of Karnataka. The temple was built on a hill in Rajajinagar, spanning 3 acres of land. The architecture blends traditional South Indian temple design with modern construction techniques. The temple complex features a stunning main shrine housing deities of Radha Krishna, along with halls for cultural programs, a museum, and a restaurant serving satvik food. The temple was envisioned by its founder Acharya Bhaktivedanta Swami Prabhupada as a centre for spiritual education and cultural preservation. It has since become one of the largest ISKCON temples in the world, attracting millions of devotees and tourists annually.",
    images: [
      "https://images.unsplash.com/photo-1545126178-862cdb469459?w=800&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80"
    ],
    category: "Spiritual"
  },
  {
    id: 8,
    name: "Nandi Hills",
    subtitle: "The Ancient Hill Fortress",
    year: "9th Century",
    description: "An ancient hill fortress offering breathtaking sunrise views and a cool retreat from the city.",
    history: "Nandi Hills, located about 60 km from Bangalore, derives its name from the ancient Nandi (bull) temple at its summit. The hill fort has a history dating back to the 9th century when it was built by the Western Ganga Dynasty. Later, it was renovated by Tipu Sultan, who used it as a summer retreat. The fort features several structures including the Tipu's Drop, a cliff from which prisoners were allegedly thrown to their death, and the Amrita Sarovar, a perennial lake. The Yoga Nandeeshwara temple at the top is an exquisite example of Dravidian architecture. The British used the hills as a sanatorium during colonial rule. The hill station offers panoramic views of the surrounding plains and is famous for its spectacular sunrise and sunset views.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 9,
    name: "Ulsoor Lake",
    subtitle: "The City's Reflecting Mirror",
    year: "1882",
    description: "One of the oldest lakes in Bangalore, offering boating and a peaceful escape amidst the urban sprawl.",
    history: "Ulsoor Lake, also known as Halasuru Lake, is one of the oldest lakes in Bangalore, dating back to the reign of Kempe Gowda II in the 16th century. The lake was further developed by Sir Lewin Bentham Bowring, the then Commissioner of Bangalore, in 1882. Spanning 121 acres, it is the largest lake within the city limits. The lake was originally created for irrigation purposes and later became a recreational spot. The adjacent Ulsoor area is one of the oldest residential localities in Bangalore. The lake has undergone several restoration efforts over the years to combat pollution and encroachment. Today, it offers boating facilities, a well-maintained promenade, and serves as a habitat for various bird species, making it a popular spot for morning walkers and nature enthusiasts.",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80",
      "https://images.unsplash.com/photo-1470770841497-7b319555f8ad?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 10,
    name: "Bull Temple",
    subtitle: "The Sacred Nandi Abode",
    year: "1537",
    description: "An ancient temple housing a massive monolithic bull statue, built in traditional Dravidian style.",
    history: "The Bull Temple, also known as the Nandi Temple, was built in 1537 by Kempe Gowda I, the founder of Bangalore. The temple is dedicated to Nandi, the sacred bull and vehicle of Lord Shiva. The centerpiece of the temple is a massive monolithic granite statue of Nandi, measuring 4.5 metres in height and 6 metres in length. The statue was carved from a single boulder and is one of the largest Nandi statues in India. The temple is built in the traditional Dravidian architectural style with a pillared hall and a sanctum sanctorum. Every year, the Groundnut Festival (Kadalekai Parishe) is held in the temple premises, attracting thousands of farmers and visitors. The temple has been renovated several times over the centuries while maintaining its original character.",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1545126178-862cdb469459?w=800&q=80"
    ],
    category: "Spiritual"
  },
  {
    id: 11,
    name: "Commercial Street",
    subtitle: "The Grand Bazaar of Bangalore",
    year: "1900s",
    description: "A legendary shopping destination that has been the commercial heartbeat of Bangalore for over a century.",
    history: "Commercial Street emerged as a major shopping hub during the early 20th century when Bangalore was expanding under British administration. The street was developed as a planned commercial area to cater to the growing needs of the city's residents. Over the decades, it has evolved into one of Bangalore's most iconic shopping destinations, housing hundreds of shops selling everything from traditional silk sarees and jewellery to modern fashion and electronics. The street's architecture reflects the colonial-era planning with wide pavements and row-style shops. During the freedom movement, it served as a gathering point for political discussions. The area around Commercial Street, including Mission Road and Church Street, formed the cultural and intellectual hub of old Bangalore. Today, it remains a favourite destination for both locals and tourists seeking the authentic Bangalore shopping experience.",
    images: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80"
    ],
    category: "Shopping"
  },
  {
    id: 12,
    name: "Bangalore Fort",
    subtitle: "The Mud Fortress of Yore",
    year: "1537",
    description: "The remnants of the original fort built by Kempe Gowda I, witnessing centuries of Bangalore's history.",
    history: "Bangalore Fort was originally built as a mud fort by Kempe Gowda I in 1537, the founder of Bangalore. The fort was later rebuilt in stone by Hyder Ali in 1761. The fort played a crucial role in the Anglo-Mysore Wars and was captured by the British forces led by Lord Cornwallis in 1791 during the Third Anglo-Mysore War. The fort originally had eight gates, but today only the Delhi Gate remains. The fort walls once enclosed the entire pete (market area) of old Bangalore. Within the fort complex, there are remnants of a palace, a Ganapati temple, and wells that once supplied water to the garrison. The fort witnessed many historical events including the imprisonment of Tipu Sultan's family after his death. Today, the remaining structures serve as a reminder of Bangalore's military past and the city's evolution from a fortified settlement to a modern metropolis.",
    images: [
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 13,
    name: "Jawaharlal Nehru Planetarium",
    subtitle: "Gateway to the Cosmos",
    year: "1989",
    description: "One of India's premier planetariums, igniting curiosity about the universe since 1989.",
    history: "The Jawaharlal Nehru Planetarium was established in 1989 under the aegis of the Bangalore Association for Science Education (BASE). Named after India's first Prime Minister, Jawaharlal Nehru, who was a strong advocate for scientific temper, the planetarium was built to promote astronomy and space science education. The building features a distinctive dome-shaped structure designed to house a state-of-the-art projection system. The planetarium conducts regular sky shows that take visitors on virtual journeys through the solar system, galaxies, and the cosmos. It also hosts astronomy workshops, exhibitions, and lectures by eminent scientists. The planetarium has played a significant role in inspiring generations of young astronomers and scientists in Karnataka. Its location near the High Court and Cubbon Park makes it part of the cultural and educational hub of Bangalore.",
    images: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    ],
    category: "Science"
  },
  {
    id: 14,
    name: "Visvesvaraya Museum",
    subtitle: "Temple of Science and Innovation",
    year: "1962",
    description: "A science and technology museum honouring Sir M. Visvesvaraya, the father of Indian engineering.",
    history: "The Visvesvaraya Industrial and Technological Museum (VITM) was established in 1962 by the Government of India in honour of Sir Mokshagundam Visvesvaraya, the eminent engineer and statesman. Located on Kasturba Road, the museum was the brainchild of the National Council of Science Museums. Sir Visvesvaraya, born in 1860 in Mysore, was the first Indian to receive a British knighthood and served as the Diwan of Mysore State. The museum houses exhibits on various scientific and industrial topics including electricity, space, biotechnology, and engineering. It features working models, interactive displays, and scientific instruments that demonstrate fundamental principles of science and technology. The museum has been instrumental in fostering scientific curiosity among students and the general public for over six decades, serving as an important educational institution in Bangalore.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    category: "Science"
  },
  {
    id: 15,
    name: "Dodda Ganapathi Temple",
    subtitle: "The Grand Shrine of the Elephant God",
    year: "16th Century",
    description: "A revered temple dedicated to Lord Ganesha, known for its massive idol and spiritual significance.",
    history: "The Dodda Ganapathi Temple in Basavanagudi is one of the most ancient and revered temples in Bangalore, dating back to the 16th century. The temple was built during the Vijayanagara period and has been a centre of devotion to Lord Ganesha for centuries. The main deity is a massive idol of Lord Ganesha, carved from a single stone, measuring approximately 6 feet in height and 8 feet in width. The temple underwent significant renovation in the early 20th century when the idol was reinstalled with great ceremony. The annual Karaga Festival and the Ganesh Chaturthi celebrations at this temple attract thousands of devotees. The temple's architecture reflects the traditional Dravidian style with a towering gopuram and intricately carved pillars. The temple complex also houses shrines dedicated to other deities including Lord Shiva and Goddess Lakshmi.",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      "https://images.unsplash.com/photo-1545126178-862cdb469459?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80"
    ],
    category: "Spiritual"
  },
  {
    id: 16,
    name: "Rangoli Metro Art Center",
    subtitle: "Where Art Meets Transit",
    year: "2011",
    description: "A unique art gallery within the Majestic metro station, showcasing contemporary and traditional Indian art.",
    history: "The Rangoli Metro Art Center, located within the Majestic metro station (Nadaprabhu Kempegowda Station), was established as part of Bangalore Metro's initiative to integrate art with public transportation. The gallery was conceptualized to bring art closer to the common man, making it accessible to the millions of daily commuters. The center hosts rotating exhibitions featuring works by established and emerging artists from Karnataka and across India. The gallery space showcases a diverse range of art forms including paintings, sculptures, installations, and photography. It has become a platform for promoting contemporary Indian art while also preserving traditional art forms. The initiative was inspired by similar art-in-transit programs in cities like Paris, London, and New York. Rangoli has organized numerous art workshops, artist talks, and cultural events, contributing to Bangalore's vibrant art scene.",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
    ],
    category: "Art & Culture"
  },
  {
    id: 17,
    name: "Lumbini Garden",
    subtitle: "A Lakeside Paradise of Tranquillity",
    year: "1990s",
    description: "A beautifully landscaped garden along the banks of Nagawara Lake, perfect for evening strolls.",
    history: "Lumbini Garden is a sprawling landscaped garden situated along the banks of Nagawara Lake in northern Bangalore. Named after the sacred garden in Nepal where Buddha was born, the park was developed as part of Bangalore's initiative to create recreational spaces around its many lakes. The garden features well-maintained lawns, walking paths, fountains, and seating areas that offer a peaceful retreat from the city's hustle. The adjacent Nagawara Lake has been a part of Bangalore's water system for centuries, and efforts to rejuvenate the lake and its surroundings led to the creation of this beautiful garden. The park has become a popular spot for families, joggers, and photography enthusiasts. Its location near the Outer Ring Road makes it easily accessible, and it has hosted numerous cultural events and community gatherings over the years.",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9790b3feeeaa?w=800&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    ],
    category: "Nature"
  },
  {
    id: 18,
    name: "Government Museum",
    subtitle: "Vault of Karnataka's Heritage",
    year: "1865",
    description: "The oldest museum in Bangalore, housing archaeological treasures and artefacts spanning millennia.",
    history: "The Government Museum in Bangalore was established in 1865, making it one of the oldest museums in India. Located within the Cubbon Park premises, the museum was initially set up by the Mysore Government to preserve and display artifacts of historical and archaeological significance. The museum houses a remarkable collection of stone sculptures, copper inscriptions, ancient coins, and artifacts from the Indus Valley Civilization. The museum's collection spans various periods including the Hoysala, Vijayanagara, and Chalukya dynasties. Among its prized possessions are sculptures from the Halebidu and Belur temples, terracotta figurines, and a collection of arms and armour. The museum also features exhibits on the natural history of Karnataka, including specimens of flora and fauna. Over its 150-year history, the museum has served as an important center for research and education about South Indian heritage.",
    images: [
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 19,
    name: "Devanahalli Fort",
    subtitle: "Birthplace of the Tiger",
    year: "1500s",
    description: "The historic fort near the airport, birthplace of Tipu Sultan, standing as a reminder of a glorious era.",
    history: "Devanahalli Fort, located about 35 km from Bangalore near the international airport, has a rich history dating back to the 1500s. The fort was originally built by the Morasu Wodeyars, a local chieftain family. It later came under the control of Hyder Ali and his son Tipu Sultan, who was born here in 1750. The fort was captured by the British in 1791 during the Third Anglo-Mysore War. The fort is constructed of stone and spans about 11 acres, with walls that are still largely intact. Within the fort complex, there are several ancient temples including the Venugopalaswamy temple and the Chandramouleshwara temple, both fine examples of Vijayanagara architecture. The fort also houses a memorial dedicated to Tipu Sultan. The Devanahalli area is also known for the Devanahalli pomelo, a unique citrus fruit that has received GI tag status.",
    images: [
      "https://images.unsplash.com/photo-1590766940554-634a8d13e3b5?w=800&q=80",
      "https://images.unsplash.com/photo-1569098644584-210bcd375b69?w=800&q=80",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80"
    ],
    category: "Heritage"
  },
  {
    id: 20,
    name: "Art of Living International Center",
    subtitle: "A Sanctuary of Inner Peace",
    year: "1986",
    description: "A sprawling 300-acre campus dedicated to meditation, yoga, and holistic well-being on the city's outskirts.",
    history: "The Art of Living International Center was established in 1986 by Sri Sri Ravi Shankar on a sprawling 300-acre campus in Kanakapura Road, on the outskirts of Bangalore. The center serves as the global headquarters of the Art of Living Foundation, a humanitarian and spiritual organization present in over 150 countries. The campus features meditation halls, yoga centers, an Ayurvedic wellness center, and beautiful gardens. The center's architecture blends traditional Indian design with modern sustainability principles. It hosts the annual World Culture Festival and regular meditation courses including the Sudarshan Kriya, a powerful breathing technique. The campus also includes a school, a hospital, and organic farms. Over the decades, millions of people from around the world have visited the center seeking spiritual growth and inner peace. The center has played a significant role in putting Bangalore on the global map as a center for spiritual tourism.",
    images: [
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
    ],
    category: "Spiritual"
  }
];
