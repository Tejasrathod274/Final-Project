// Simple list of all destinations: name, description, places, hotels, tours
// Each destination has the same structure - easy to add more later
window.DESTINATION_DATA = {
  kerala: {
    name: 'Kerala',
    description: 'Tropical paradise with backwaters, beaches and hill stations.',
    aboutParagraph: 'Kerala is a green paradise in South India. It is famous for its backwaters, houseboats, tea gardens in Munnar, and peaceful beaches like Kovalam. You can explore historic Kochi with its Chinese fishing nets, wildlife in Thekkady, and the hills of Wayanad. The culture, food, and hospitality here make it one of India\'s most loved destinations.',
    heroImage: 'images/kerala/kerala1.jpg',
    places: [
      { name: 'Munnar', description: 'Tea gardens and misty hills.', image: 'images/kerala/munnar/munnar.jpg' },
      { name: 'Alleppey', description: 'Backwaters and houseboat stays.', image: 'images/kerala/allepey/allepey.jpg' },
      { name: 'Kochi', description: 'Historic port and Chinese fishing nets.', image: 'images/kerala/kochi/kochi.jpg' },
      { name: 'Thekkady', description: 'Wildlife and spice plantations.', image: 'images/kerala/thekkady/thekkady.jpg' },
      { name: 'Kovalam', description: 'Beaches and lighthouse.', image: 'images/kerala/kovalam/kovalam.jpg' },
      { name: 'Wayanad', description: 'Green hills and caves.', image: 'images/kerala/wayanad/wayanad.jpg' }
    ],
    hotels: [
      { name: 'Backwater Resort', description: 'Lakeside with houseboat access.', price: '₹4,500/night', image: 'images/kerala/allepey/hotel/BackwaterResort.jpg' },
      { name: 'Tea County Munnar', description: 'Estate bungalow in tea gardens.', price: '₹6,200/night', image: 'images/kerala/munnar/hotel/tea-county.jpg' },
      { name: 'Kochi Heritage Hotel', description: 'Colonial stay in Fort Kochi.', price: '₹5,800/night', image: 'images/kerala/kochi/hotel/Kochi-Heritage.jpg' },
      { name: 'Kovalam Beach Inn', description: 'Steps from the beach.', price: '₹3,900/night', image: 'images/kerala/kovalam/hotel/Kovalam-Beach.jpg' },
      { name: 'Wayanad Green Lodge', description: 'Amidst nature.', price: '₹4,200/night', image: 'images/kerala/wayanad/hotel/wayanad-lodge.jpg' }
    ],
    tours: [
      { name: 'Kerala Backwaters 3D', description: 'Houseboat and backwaters.', price: '₹12,000/person', image: 'images/kerala/tours/Kerala-Backwaters.jpg' },
      { name: 'Munnar-Thekkady 4D', description: 'Hills and wildlife.', price: '₹15,500/person', image: 'images/kerala/tours/munnar-thekkeday.jpg' },
      { name: 'Full Kerala 7D', description: 'Backwaters, hills and coast.', price: '₹28,000/person', image: 'images/kerala/tours/kerala-full.jpg' },
      { name: 'Kerala Hills 5D', description: 'Munnar, Wayanad and tea estates.', price: '₹18,000/person', image: 'images/kerala/tours/kerala-hills.jpg' },
      { name: 'Kerala Beaches 4D', description: 'Kovalam, Varkala and coast.', price: '₹14,000/person', image: 'images/kerala/tours/kerala-beaches.jpg' }
    ],
    restaurants: [
      { name: 'Kayees Rahmathullah', description: 'Famous for biryani in Mattancherry, Kochi.', cuisine: 'Biryani', image: 'images/kerala/kochi/restaurant/kayees.jpg' },
      { name: 'Paragon Restaurant', description: 'Traditional Kerala meals and seafood in Kozhikode.', cuisine: 'Kerala', image: 'images/kerala/restaurant/paragon.jpg' },
      { name: 'Saravana Bhavan', description: 'South Indian vegetarian across Kerala.', cuisine: 'Vegetarian', image: 'images/kerala/restaurant/saravana.jpg' }
    ]
  },
  jaipur: {
    name: 'Jaipur',
    description: 'Royal forts, palaces and vibrant culture.',
    aboutParagraph: 'Jaipur, the Pink City, is the capital of Rajasthan. It is known for Amber Fort, City Palace, Hawa Mahal, and busy bazaars. The city showcases royal heritage, handicrafts, and Rajasthani culture. From forts to street food, Jaipur offers a perfect mix of history and local life.',
    heroImage: 'images/jaipur/jaipur.jpg',
    places: [
      { name: 'Amber Fort', description: 'Majestic fort and palace.', image: 'images/jaipur/amber-fort/amber-fort.jpg' },
      { name: 'City Palace', description: 'Royal residence and museums.', image: 'images/jaipur/city-palace/city-Palace.jpg' },
      { name: 'Hawa Mahal', description: 'Palace of Winds.', image: 'images/jaipur/hawa-mahal/hawa-mahal.jpg' },
      { name: 'Jantar Mantar', description: 'Ancient observatory.', image: 'images/jaipur/jantar-mantar/jantar-mantar.jpg' },
      { name: 'Nahargarh Fort', description: 'Views over the city.', image: 'images/jaipur/nahargarh-fort/nahargah-fort.jpg' },
      { name: 'Johari Bazaar', description: 'Markets and handicrafts.', image: 'images/jaipur/johari-bazaar/johari-bazaar.jpg' }
    ],
    hotels: [
      { name: 'Raj Palace Heritage', description: 'Palace hotel with royal suites.', price: '₹9,000/night', image: 'images/jaipur/city-palace/hotel/raj-palace.jpg' },
      { name: 'Pink City Inn', description: 'Central near markets.', price: '₹3,200/night', image: 'images/jaipur/hawa-mahal/hotel/pink-city-inn.jpg' },
      { name: 'Fort View Resort', description: 'Views of Amber Fort.', price: '₹5,500/night', image: 'images/jaipur/amber-fort/hotel/fort-view.jpg' },
      { name: 'Heritage Haveli Jaipur', description: 'Traditional stay.', price: '₹4,800/night', image: 'images/jaipur/jantar-mantar/hotel/heritage-haveli.jpg' }
    ],
    tours: [
      { name: 'Jaipur Royal Tour', description: 'Forts, palaces and markets.', price: '₹9,000/person', image: 'images/jaipur/tours/jaipur-tour.jpg' },
      { name: 'Rajasthan Heritage 5D', description: 'Jaipur, Udaipur and more.', price: '₹28,000/person', image: 'images/jaipur/tours/rajasthan.jpg' },
      { name: 'Golden Triangle 6D', description: 'Delhi, Agra, Jaipur.', price: '₹22,000/person', image: 'images/jaipur/tours/golden-triangle-tour-package.jpg' }
    ],
    restaurants: [
      { name: 'Laxmi Mishthan Bhandar (LMB)', description: 'Famous sweets and traditional meals near Johari Bazaar.', cuisine: 'Rajasthani', image: 'images/jaipur/johari-bazaar/restaurant/lmb.jpg' },
      { name: 'Tapri Central', description: 'Café with rooftop views and chai.', cuisine: 'Café', image: 'images/jaipur/city-palace/restaurant/tapri-central.jpg' },
      { name: 'Handi Restaurant', description: 'North Indian and Mughlai in MI Road.', cuisine: 'North Indian', image: 'images/jaipur/restaurant/handi.jpg' }
    ]
  },
  himachal: {
    name: 'Himachal',
    description: 'Snowy mountains and peaceful hill stations.',
    aboutParagraph: 'Himachal Pradesh is a mountain state with hill stations like Shimla, Manali, and Dharamshala. You can enjoy snow, trekking, Tibetan culture in McLeod Ganj, and quiet valleys like Spiti. The state is ideal for nature lovers and adventure seekers.',
    heroImage: 'images/Himachal.jpg',
    places: [
      { name: 'Shimla', description: 'Queen of Hills, colonial charm.', image: 'images/Himachal/shimla/to-visit/shimla.jpg' },
      { name: 'Manali', description: 'Adventure and snow views.', image: 'images/Himachal/manali/to-visit/manali.jpg' },
      { name: 'Dharamshala', description: 'Tibetan culture and Dalai Lama.', image: 'images/Himachal/dharamshala/to-visit/dharamshala.jpg' },
      { name: 'Spiti Valley', description: 'High-altitude desert and monasteries.', image: 'images/Himachal/spiti-valley/to-visit/spiti-valley.jpg' },
      { name: 'Dalhousie', description: 'Quiet hills and valleys.', image: 'images/Himachal/dalhousie/to-visit/dalhousie.jpg' },
      { name: 'Kasol', description: 'Hippie trails and trekking.', image: 'images/Himachal/kasol/to-visit/kasol.jpg' }
    ],
    hotels: [
      { name: 'Mountain View Shimla', description: 'Valley views.', price: '₹5,500/night', image: 'images/Himachal/shimla/hotel/mountain-view.jpg' },
      { name: 'Manali Snow Resort', description: 'Near Rohtang and Solang.', price: '₹6,800/night', image: 'images/Himachal/manali/hotel/manali-snow.jpg' },
      { name: 'Dharamshala Peace Inn', description: 'Near McLeod Ganj.', price: '₹3,900/night', image: 'images/Himachal/dharamshala/hotel/peace-inn.jpg' },
      { name: 'Spiti Valley Lodge', description: 'Simple and cosy.', price: '₹2,500/night', image: 'images/Himachal/spiti-valley/hotel/spiti-lodge.jpg' }
    ],
    tours: [
      { name: 'Shimla-Manali 5D', description: 'Classic hill circuit.', price: '₹18,000/person', image: 'images/Himachal.jpg' },
      { name: 'Spiti Valley 7D', description: 'Adventure and monasteries.', price: '₹25,000/person', image: 'images/Himachal.jpg' },
      { name: 'Dharamshala & Bir 4D', description: 'Culture and paragliding.', price: '₹14,000/person', image: 'images/Himachal.jpg' }
    ],
    restaurants: [
      { name: 'Johnson Lodge (Manali)', description: 'Wood-fired pizzas and mountain views.', cuisine: 'Continental', image: 'images/Himachal/manali/restaurant/johnson-lodge.jpg' },
      { name: 'Illiterati (McLeod Ganj)', description: 'Books, coffee, and Tibetan food.', cuisine: 'Tibetan', image: 'images/Himachal/dharamshala/restaurant/illiterati.jpg' },
      { name: 'Wake & Bake (Kasol)', description: 'Israeli and continental by the river.', cuisine: 'Continental', image: 'images/Himachal/kasol/restaurant/wake-bake.jpg' }
    ]
  },
  kashmir: {
    name: 'Kashmir',
    description: 'Paradise with valleys and lakes.',
    aboutParagraph: 'Kashmir is known for Dal Lake, houseboats, Gulmarg meadows, and Pahalgam valleys. Shikara rides, snow in winter, and local hospitality make it a favourite. The region offers both peace and adventure in the Himalayas.',
    heroImage: 'images/kashmir.jpg',
    places: [
      { name: 'Dal Lake', description: 'Houseboats and shikara rides.', image: 'images/kashmir/dal-lake/to-visit/dal-lake.jpg' },
      { name: 'Gulmarg', description: 'Meadows and skiing.', image: 'images/kashmir/gulmarg/to-visit/gulmarg.jpg' },
      { name: 'Pahalgam', description: 'Valleys and trekking.', image: 'images/kashmir/to-visit/pahalgam.jpg' },
      { name: 'Sonamarg', description: 'Meadow of gold.', image: 'images/kashmir/to-visit/sonamarg.jpg' },
      { name: 'Betaab Valley', description: 'Green meadows and streams.', image: 'images/kashmir/to-visit/betaab-valley.jpg' }
    ],
    hotels: [
      { name: 'Dal Lake Houseboat', description: 'Traditional houseboat stay.', price: '₹8,500/night', image: 'images/kashmir/dal-lake/hotel/dal-lake-houseboat.jpg' },
      { name: 'Gulmarg Resort', description: 'Slopes and mountain views.', price: '₹9,200/night', image: 'images/kashmir/gulmarg/hotel/gulmarg-resort.jpg' },
      { name: 'Pahalgam Valley Lodge', description: 'Riverside lodge.', price: '₹5,500/night', image: 'images/kashmir/hotel/pahalgam-lodge.jpg' }
    ],
    tours: [
      { name: 'Kashmir Paradise 5D', description: 'Srinagar, Gulmarg, Pahalgam.', price: '₹24,000/person', image: 'images/kashmir-tour.jpg' },
      { name: 'Houseboat & Gulmarg 4D', description: 'Houseboat plus Gulmarg.', price: '₹18,500/person', image: 'images/kashmir-tour.jpg' }
    ],
    restaurants: [
      { name: 'Ahdoos', description: 'Famous for wazwan and Kashmiri cuisine in Srinagar.', cuisine: 'Kashmiri', image: 'images/kashmir/dal-lake/restaurant/ahdoos.jpg' },
      { name: 'Mughal Darbar', description: 'Kashmiri and North Indian in Srinagar.', cuisine: 'Kashmiri', image: 'images/kashmir/dal-lake/restaurant/mughal-darbar.jpg' },
      { name: 'Stream Restaurant (Gulmarg)', description: 'Views and local food.', cuisine: 'Kashmiri', image: 'images/kashmir/gulmarg/restaurant/stream.jpg' }
    ]
  },
  mumbai: {
    name: 'Mumbai',
    description: 'City of dreams and coastal charm.',
    aboutParagraph: 'Mumbai is India\'s financial and entertainment capital. Gateway of India, Marine Drive, Elephanta Caves, and Bollywood are major draws. The city mixes colonial heritage with street food, markets, and a fast-paced urban life.',
    heroImage: 'images/mumbai.jpg',
    places: [
      { name: 'Gateway of India', description: 'Iconic monument by the sea.', image: 'images/mumbai/gateway-of-india/to-visit/gateway-of-india.jpg' },
      { name: 'Marine Drive', description: "Queen's Necklace promenade.", image: 'images/mumbai/marine-drive/to-visit/marine-drive.jpg' },
      { name: 'Elephanta Caves', description: 'Ancient rock-cut caves.', image: 'images/mumbai/to-visit/elephanta-caves.jpg' },
      { name: 'Bollywood Studios', description: 'Film city tours.', image: 'images/mumbai/to-visit/bollywood-studios.jpg' },
      { name: 'Colaba Causeway', description: 'Shopping and street food.', image: 'images/mumbai/to-visit/colaba-causeway.jpg' }
    ],
    hotels: [
      { name: 'Marine Drive Hotel', description: 'Sea-facing rooms.', price: '₹6,500/night', image: 'images/mumbai/marine-drive/hotel/marine-drive-hotel.jpg' },
      { name: 'Gateway View', description: 'Near Gateway of India.', price: '₹5,200/night', image: 'images/mumbai/gateway-of-india/hotel/gateway-view.jpg' },
      { name: 'Bandra Boutique', description: 'Trendy area stay.', price: '₹4,800/night', image: 'images/mumbai/hotel/bandra-boutique.jpg' }
    ],
    tours: [
      { name: 'Mumbai City Tour', description: 'Monuments, markets and chowpatty.', price: '₹3,500/person', image: 'images/mumbai.jpg' },
      { name: 'Elephanta & Dharavi', description: 'Caves and local experience.', price: '₹5,000/person', image: 'images/mumbai.jpg' }
    ],
    restaurants: [
      { name: 'Bademiya', description: 'Legendary street kebabs near Taj, Colaba.', cuisine: 'Mughlai', image: 'images/mumbai/gateway-of-india/restaurant/bademiya.jpg' },
      { name: 'Britannia & Co.', description: 'Parsi food and berry pulao in Ballard Estate.', cuisine: 'Parsi', image: 'images/mumbai/restaurant/britannia.jpg' },
      { name: 'Trishna', description: 'Fresh seafood in Fort.', cuisine: 'Seafood', image: 'images/mumbai/restaurant/trishna.jpg' }
    ]
  },
  goa: {
    name: 'Goa',
    description: 'Beaches, nightlife and Portuguese heritage.',
    aboutParagraph: 'Goa is known for beaches, Portuguese churches, and relaxed vibes. Calangute, Anjuna, and Old Goa offer sun, sea, heritage, and nightlife. The food mixes Konkan, Portuguese, and seafood.',
    heroImage: 'images/goa.jpg',
    places: [
      { name: 'Calangute Beach', description: 'Popular beach and water sports.', image: 'images/goa/calangute-beach/to-visit/calangute-beach.jpg' },
      { name: 'Old Goa', description: 'Churches and heritage.', image: 'images/goa/to-visit/old-goa.jpg' },
      { name: 'Dudhsagar Falls', description: 'Milky waterfall.', image: 'images/goa/to-visit/dudhsagar-falls.jpg' },
      { name: 'Anjuna Beach', description: 'Flea market and parties.', image: 'images/goa/to-visit/anjuna-beach.jpg' },
      { name: 'Fontainhas', description: 'Colonial quarter in Panjim.', image: 'images/goa/to-visit/fontainhas.jpg' }
    ],
    hotels: [
      { name: 'Beach Resort Calangute', description: 'On the beach.', price: '₹5,200/night', image: 'images/goa/calangute-beach/hotel/beach-resort-calangute.jpg' },
      { name: 'Goa Heritage Inn', description: 'In old Goa area.', price: '₹4,500/night', image: 'images/goa/hotel/goa-heritage-inn.jpg' },
      { name: 'Anjuna Beach House', description: 'Chill vibe.', price: '₹4,800/night', image: 'images/goa/hotel/anjuna-beach-house.jpg' }
    ],
    tours: [
      { name: 'Goa Beach 4D', description: 'Beaches and nightlife.', price: '₹11,500/person', image: 'images/goa-tour.jpg' },
      { name: 'Goa Heritage & Nature 5D', description: 'Churches, falls and beaches.', price: '₹16,000/person', image: 'images/goa-tour.jpg' }
    ],
    restaurants: [
      { name: 'Martin\'s Corner', description: 'Goan seafood and music in Betalbatim.', cuisine: 'Goan', image: 'images/goa/restaurant/martins-corner.jpg' },
      { name: 'Viva Panjim', description: 'Goan and Portuguese in Fontainhas.', cuisine: 'Goan', image: 'images/goa/to-visit/viva-panjim.jpg' },
      { name: 'Thalassa', description: 'Greek food with beach view, Vagator.', cuisine: 'Greek', image: 'images/goa/calangute-beach/restaurant/thalassa.jpg' }
    ]
  },
};

// Place-level detail: when user clicks Explore on a place (e.g. Munnar), show this data.
// Key: destination key (kerala, jaipur...) -> place key (munnar, alleppey... lowercase).
window.PLACE_DETAILS = {
  kerala: {
    munnar: {
      aboutParagraph: 'Munnar is a beautiful hill station in Kerala, famous for endless tea plantations, misty mountains, and cool weather. It sits in the Western Ghats and is one of the best places to see how tea is grown and processed. You can visit Echo Point, Mattupetty Dam, Eravikulam National Park (home to the Nilgiri tahr), and the Tea Museum. Munnar is ideal for nature walks, photography, and a peaceful break from the heat.',
      heroImage: 'images/kerala/munnar/munnar.jpg',
      hotels: [
        { name: 'Tea County Munnar', description: 'Estate bungalow surrounded by tea gardens. Cosy rooms and mountain views.', price: '₹6,200/night', image:'images/kerala/munnar/hotel/tea-county.jpg'},
        { name: 'Windermere Estate', description: 'Heritage stay with tea estate walks and organic food.', price: '₹8,500/night', image: 'images/kerala/munnar/hotel/windermere.jpg' },
        { name: 'Sienna Village', description: 'Cottages in the hills with fireplace and garden.', price: '₹5,500/night', image: 'images/kerala/munnar/hotel/sienna.jpg'}
      ],
      restaurants: [
        { name: 'Rapsy Restaurant', description: 'Popular for North Indian, Chinese and Kerala meals. Great views.', cuisine: 'Multi-cuisine' ,image:'images/kerala/munnar/restaurant/rapsy.jpg' },
        { name: 'Saravana Bhavan Munnar', description: 'South Indian vegetarian and breakfast.', cuisine: 'South Indian', image: 'images/kerala/munnar/restaurant/saravana.jpg' },
        { name: 'SN Restaurant', description: 'Local Kerala food and fresh tea.', cuisine: 'Kerala', image: 'images/kerala/munnar/restaurant/sn.jpg' }
      ],
      spotsToVisit: [
        { name: 'Eravikulam National Park', description: 'See Nilgiri tahr and rolling green hills.', image: 'images/kerala/munnar/to-visit/eravikulam.jpg' },
        { name: 'Tea Museum', description: 'Learn how tea is made and taste fresh tea.', image: 'images/kerala/munnar/to-visit/tea-museum.jpg' },
        { name: 'Echo Point', description: 'Scenic viewpoint with natural echo.', image: 'images/kerala/munnar/to-visit/echo-point.jpg' },
        { name: 'Mattupetty Dam', description: 'Lake and dam with boating.', image: 'images/kerala/munnar/to-visit/mattupetty-dam.jpg' }
      ],
    },
    alleppey: {
      aboutParagraph: 'Alleppey (Alappuzha) is the gateway to Kerala\'s backwaters. It is famous for houseboat stays, canals, and village life along the water. You can cruise on a kettuvallam (houseboat), watch coir-making, and enjoy fresh Kerala food on the boat. The town has a beach, and nearby you can explore Kuttanad’s paddy fields and bird life.',
      heroImage: 'images/kerala/allepey/allepey.jpg',
      hotels: [
        { name: 'Backwater Resort', description: 'Lakeside rooms and houseboat booking. Peaceful setting.', price: '₹4,500/night', image: 'images/kerala/allepey/hotel/BackwaterResort.jpg' },
        { name: 'Palm Grove Lake Resort', description: 'On the backwaters with pool and restaurant.', price: '₹5,800/night', image: 'images/kerala/allepey/hotel/palmgroveresort.jpg' },
        { name: 'Raheem Residency', description: 'Heritage stay near the beach.', price: '₹4,200/night', image: 'images/kerala/allepey/hotel/raheemresidency.jpg' }
      ],
      spotsToVisit: [
        { name: 'Houseboat Cruise', description: 'Stay or day cruise on the backwaters.', image: 'images/kerala/allepey/to-visit/chakara.jpg' },
        { name: 'Alleppey Beach', description: 'Long beach and lighthouse.', image: 'images/kerala/allepey/to-visit/AlleppeyBeach.jpg' },
        { name: 'Kuttanad', description: 'Paddy fields and village life below sea level.', image: 'images/kerala/allepey/to-visit/Kuttanadpaddy.jpg' }
      ],
       restaurants: [
        { name: 'Kayees Rahmathullah', description: 'Famous biryani in Mattancherry.', cuisine: 'Biryani', image: 'images/kerala/allepey/restaurant/kayees.jpg' },
        { name: 'Kashi Art Café', description: 'Breakfast, coffee and art gallery.', cuisine: 'Café', image: 'images/kerala/allepey/restaurant/kashi.jpg' },
        { name: 'kream-Korener', description: 'Local food with spice plantation tour.', cuisine: 'Kerala', image: 'images/kerala/allepey/restaurant/kream-korener.jpg' }
      ],
    },
    kochi: {
      aboutParagraph: 'Kochi (Cochin) is a historic port city with a mix of Indian, Dutch, and Portuguese heritage. Fort Kochi is known for Chinese fishing nets, St Francis Church, and narrow streets. You can see Kathakali performances, visit the Jewish Synagogue in Mattancherry, and enjoy seafood and cafés. Kochi is a great base to start or end a Kerala trip.',
      heroImage: 'images/kerala/kochi/kochi.jpg',
      hotels: [
        { name: 'Kochi Heritage Hotel', description: 'Colonial-style stay in Fort Kochi.', price: '₹5,800/night', image: 'images/kerala/kochi/hotel/hotelkochi.jpg' },
        { name: 'Brunton Boatyard', description: 'Waterfront heritage hotel with pool.', price: '₹12,000/night', image: 'images/kerala/kochi/hotel/brunton.jpg' },
        { name: 'Old Harbour Hotel', description: 'Charming rooms in the heart of Fort Kochi.', price: '₹6,500/night', image: 'images/kerala/kochi/hotel/OldHarbor.jpg' }
      ],
      restaurants: [
        { name: 'Kayees Rahmathullah', description: 'Famous biryani in Mattancherry.', cuisine: 'Biryani', image: 'images/kerala/kochi/restaurant/kayees.jpg' },
        { name: 'Dal Roti', description: 'North Indian and continental in Fort Kochi.', cuisine: 'North Indian', image: 'images/kerala/kochi/restaurant/dal-roti.jpg' },
        { name: 'Kashi Art Café', description: 'Breakfast, coffee and art gallery.', cuisine: 'Café', image: 'images/kerala/kochi/restaurant/kashi.jpg' }
      ],
      spotsToVisit: [
        { name: 'Chinese Fishing Nets', description: 'Iconic nets on the waterfront.', image: 'images/kerala/kochi/to-visit/fishcatching.jpg' },
        { name: 'Fort Kochi Beach', description: 'Evening stroll and street food.', image: 'images/kerala/kochi/to-visit/fortkochi.jpg' },
        { name: 'Mattancherry Palace', description: 'Dutch Palace with murals.', image: 'images/kerala/kochi/to-visit/mattanchery.jpg' },
      ],
    },
    thekkady: {
      aboutParagraph: 'Thekkady is known for Periyar Wildlife Sanctuary, spice plantations, and green hills. You can do boat rides on Periyar Lake to spot elephants and other wildlife, walk in spice gardens, and watch traditional performances. The area is perfect for nature and wildlife lovers.',
      heroImage: 'images/kerala/thekkady/thekkady.jpg',
      hotels: [
        { name: 'Spice Village', description: 'Eco resort with spice garden and pool.', price: '₹7,500/night', image: 'images/kerala/thekkady/hotel/spicevillage.jpg' },
        { name: 'Cardamom County', description: 'Near Periyar with mountain views.', price: '₹5,200/night', image: 'images/kerala/thekkady/hotel/cardamom.jpg' },
        { name: 'Green Palace Resort', description: 'Comfortable stay close to the sanctuary.', price: '₹4,000/night', image: 'images/kerala/thekkady/hotel/greenpalace.jpg' }
      ],
      restaurants: [
        { name: 'Ambadi Restaurant', description: 'Kerala and Indian in a garden setting.', cuisine: 'Kerala', image: 'images/kerala/thekkady/restaurant/hotelambadi.jpg' },
        { name: 'Spice Garden Restaurant', description: 'Local food with spice plantation tour.', cuisine: 'Kerala', image: 'images/kerala/thekkady/restaurant/spicegarden.jpg' }
      ],
      spotsToVisit: [
        { name: 'Periyar Wildlife Sanctuary', description: 'Boat safari and wildlife.', image: 'images/kerala/thekkady/to-visit/periyar.jpg' },
        { name: 'Spice Plantations', description: 'Tours and fresh spices.', image: 'images/kerala/thekkady/to-visit/spice-plantation.jpg' },
        { name: 'Kathakali Show', description: 'Traditional dance performances.', image: 'images/kerala/thekkady/to-visit/kathakali.jpg' }
      ],
    },
    kovalam: {
      aboutParagraph: 'Kovalam is a popular beach town near Thiruvananthapuram with three main beaches: Lighthouse, Hawah, and Samudra. You can relax on the sand, swim, try Ayurvedic massages, and enjoy seafood. The lighthouse offers great views. Kovalam is ideal for a relaxed beach holiday.',
      heroImage: 'images/kerala/kovalam/kovalam.jpg',
      hotels: [
        { name: 'Kovalam Beach Inn', description: 'Steps from the beach with sea view.', price: '₹3,900/night', image: 'images/kerala/kovalam/hotel/kovalambeach.jpg' },
        { name: 'The Leela Kovalam', description: 'Luxury resort on the cliff and beach.', price: '₹15,000/night', image: 'images/kerala/kovalam/hotel/leela.jpg' },
        { name: 'Surya Samudra', description: 'Heritage cottages with ocean view.', price: '₹9,000/night', image: 'images/kerala/kovalam/hotel/surya.jpg' }
      ],
      restaurants: [
        { name: 'Suprabhatham', description: 'South Indian and seafood by the beach.', cuisine: 'South Indian', image: 'images/kerala/kovalam/restaurant/hotel-suprabhatham.jpg' },
        { name: 'Sea view Restaurant', description: 'Multi-cuisine with sea view.', cuisine: 'Multi-cuisine', image: 'images/kerala/kovalam/restaurant/seaview.jpg' }
      ],
      spotsToVisit: [
        { name: 'Lighthouse Beach', description: 'Main beach and lighthouse.', image: 'images/kerala/kovalam/to-visit/Lighthouse.jpg' },
        { name: 'Vizhinjam Harbour', description: 'Fishing harbour and temple.', image: 'images/kerala/kovalam/to-visit/vizhinjam.jpg' }
      ],
    },
    wayanad: {
      aboutParagraph: 'Wayanad is a green district in the Western Ghats with forests, waterfalls, and caves. You can visit Edakkal Caves, Chembra Peak, Soochipara Falls, and Banasura Sagar Dam. The area is great for trekking, wildlife, and tea/coffee estates. Wayanad is less crowded than Munnar and perfect for nature lovers.',
      heroImage: 'images/kerala/wayanad/wayanad.jpg',
      hotels: [
        { name: 'Wayanad Green Lodge', description: 'Amidst nature with garden and meals.', price: '₹4,200/night', image: 'images/kerala/wayanad/hotel/wayanand-green.jpg' },
        { name: 'Vythiri Resort', description: 'Treehouse and cottage stay in the forest.', price: '₹8,000/night', image: 'images/kerala/wayanad/hotel/Vyrithi.jpg' },
        { name: 'Tranquil Resort', description: 'Eco stay with coffee plantation.', price: '₹6,500/night', image: 'images/kerala/wayanad/hotel/tranquil.jpg' }
      ],
      restaurants: [
        { name: 'Salt N Pepper', description: 'North Indian and local food in Kalpetta.', cuisine: 'Multi-cuisine', image: 'images/kerala/wayanad/restaurant/saltnpepper.jpg' },
        { name: 'Udupi Restaurant', description: 'South Indian vegetarian.', cuisine: 'South Indian', image: 'images/kerala/wayanad/restaurant/udupi.jpg' }
      ],
      spotsToVisit: [
        { name: 'Edakkal Caves', description: 'Ancient cave with carvings.', image: 'images/kerala/wayanad/to-visit/caves.jpg' },
        { name: 'Chembra Peak', description: 'Highest peak and trek.', image: 'images/kerala/wayanad/to-visit/kerala-hills.jpg' },
        { name: 'Soochipara Falls', description: 'Three-tier waterfall.', image: 'images/kerala/wayanad/to-visit/Soochipara.jpg' },
        { name: 'Banasura Sagar Dam', description: 'Largest earthen dam in India.', image: 'images/kerala/wayanad/to-visit/banasura-sagar-dam.jpg' }
      ],
    }
  },
  jaipur: {
    'amber fort': {
      aboutParagraph: 'Amber Fort is a large fort-palace on a hill near Jaipur, built in the 16th century. It has courtyards, halls, and the famous Sheesh Mahal (mirror palace). You can walk up or take a jeep/elephant ride. The fort offers great views of the surrounding hills and Maota Lake.',
      heroImage: 'images/jaipur/amber-fort/amber-fort.jpg',
      hotels: [
        { name: 'Fort View Resort', description: 'Views of Amber Fort from the rooms.', price: '₹5,500/night',image:'images/jaipur/amber-fort/hotel/fort-view.jpg' },
        { name: 'Mandawa Haveli', description: 'Heritage stay near the fort.', price: '₹4,200/night', image:'images/jaipur/amber-fort/hotel/mandawa.jpg' },
        { name: 'Amber Valley Inn', description: 'Luxury resort at the fort base.', price: '₹8,500/night', image:'images/jaipur/amber-fort/hotel/amber-valley.jpg' }
      ],
      restaurants: [
        { name: 'Anokhi Café', description: 'Healthy food and café near the fort road.', cuisine: 'Café', image:'images/jaipur/amber-fort/restaurant/anokhi-cafe.jpg' },
        { name: 'Laxmi Mishthan Bhandar', description: 'Sweets and Rajasthani snacks.', cuisine: 'Rajasthani', image:'images/jaipur/amber-fort/restaurant/laxmi.jpg' },
        { name: 'Fort Royal Dine', description: 'Mughlai and traditional Rajasthani meals.', cuisine: 'Rajasthani', image:'images/jaipur/amber-fort/restaurant/royal-dine.jpg' }
      ],
      spotsToVisit: [
        { name: 'Sheesh Mahal', description: 'Mirror palace inside the fort.', image: 'images/jaipur/amber-fort/to-visit/sheesh-mahal.jpg' },
        { name: 'Maota Lake', description: 'Lake at the foot of the fort for views.', image: 'images/jaipur/amber-fort/to-visit/matao-lake.jpg' },
        { name: 'Jeep and Elephant Ride', description: 'Adventure ride up to the fort.', image: 'images/jaipur/amber-fort/to-visit/jeep-elephant.jpg' }
      ],
      tours: [
        { name: 'Jaipur Royal Tour', description: 'Forts, palaces and markets.', price: '₹9,000/person', image: 'images/jaipur-tour.jpg' },
        { name: 'Golden Triangle 6D', description: 'Delhi, Agra, Jaipur.', price: '₹22,000/person', image: 'images/jaipur-tour.jpg' }
      ]
    },
    'city palace': {
      aboutParagraph: 'City Palace in the heart of Jaipur is still home to the royal family. It has museums, courtyards, and the famous Peacock Gate. You can see royal costumes, weapons, and art. The palace blends Rajasthani and Mughal architecture.',
      heroImage: 'images/jaipur/city-palace/city-palace.jpg',
      hotels: [
        { name: 'Raj Palace Heritage', description: 'Palace hotel with royal suites.', price: '₹9,000/night',image:'images/jaipur/city-palace/hotel/raj-palace.jpg' },
        { name: 'Pink City Inn', description: 'Central, near City Palace and markets.', price: '₹3,200/night', image:'images/jaipur/city-palace/hotel/pin-city.jpg' },
        { name: 'Royal Dynasty Hotel', description: 'Luxury hotel opposite the palace.', price: '₹7,500/night', image:'images/jaipur/city-palace/hotel/royal-dynasty.jpg' }
      ],
      restaurants: [
        { name: 'Handi Restaurant', description: 'Mughlai and North Indian near MI Road.', cuisine: 'North Indian', image:'images/jaipur/city-palace/restaurant/handi.jpg' },
        { name: 'Tapri Central', description: 'Rooftop chai and snacks with palace view.', cuisine: 'Café', image:'images/jaipur/city-palace/restaurant/tapri.jpg' },
        { name: 'Palace View Dine', description: 'Royal restaurant with heritage ambiance.', cuisine: 'North Indian', image:'images/jaipur/city-palace/restaurant/palace-view.jpg' }
      ],
      spotsToVisit: [
        { name: 'Mubarak Mahal', description: 'Museum of royal textiles and royal attire.', image: 'images/jaipur/city-palace/to-visit/mubarak.jpg' },
        { name: 'Chandra Mahal', description: 'Royal residence with partial access for tourists.', image: 'images/jaipur/city-palace/to-visit/chandra-mahal.jpg' },
        { name: 'Peacock Gate', description: 'Famous ornate gate with royal insignia.', image: 'images/jaipur/city-palace/to-visit/peacock-gate.jpg' }
      ],
    },
    'hawa mahal': {
      aboutParagraph: 'Hawa Mahal, the Palace of Winds, is a five-storey facade with small windows so royal women could watch the street without being seen. It is a symbol of Jaipur and best viewed from the street in the morning light.',
      heroImage: 'images/jaipur/hawa-mahal/hawa-mahal.jpg',
      hotels: [
        { name: 'Pink City Inn', description: 'Walking distance to Hawa Mahal.', price: '₹3,200/night' ,image:'images/jaipur/hawa-mahal/hotel/pin-city.jpg' },
        { name: 'Mahal Budget Hotel', description: 'Budget stay right below the palace.', price: '₹2,800/night', image:'images/jaipur/hawa-mahal/hotel/mahal-budget.jpg' },
        { name: 'Window Palace Inn', description: 'Heritage hotel near main streets.', price: '₹4,200/night', image:'images/jaipur/hawa-mahal/hotel/window-palace.jpg' }
      ],
      restaurants: [
        { name: 'LMB', description: 'Famous sweets and thali near Johari Bazaar.', cuisine: 'Rajasthani', image:'images/jaipur/johari-bazaar/restaurant/lxmb.jpg' },
        { name: 'Rajasthani Kitchen', description: 'Traditional Rajasthani meals.', cuisine: 'Rajasthani', image:'images/jaipur/hawa-mahal/restaurant/rajasthani-kitchen.jpg' },
        { name: 'Street Food Court', description: 'Local street food and chaat.', cuisine: 'Street Food', image:'images/jaipur/hawa-mahal/restaurant/street-food.jpg' }
      ],
      spotsToVisit: [
        { name: 'Johari Bazaar', description: 'Traditional market behind Hawa Mahal.', image: 'images/jaipur/hawa-mahal/to-visit/johari-bazaar.jpg' },
        { name: 'Photography Spot', description: 'Best views from the main road.', image: 'images/jaipur/hawa-mahal/to-visit/photo-spot.jpg' },
        { name: 'Museum Interior', description: 'Walk through small chambers and rooms.', image: 'images/jaipur/hawa-mahal/to-visit/interior.jpg' }
      ],
    },
    'jantar mantar': {
      aboutParagraph: 'Jantar Mantar in Jaipur is an ancient astronomical observatory with large stone instruments to measure time and position of stars. It is a UNESCO site and shows the scientific side of Rajasthan.',
      heroImage: 'images/jaipur/jantar-mantar/jantar-mantar.jpg',
      hotels: [
        { name: 'Heritage Haveli Jaipur', description: 'Traditional stay near the old city.', price: '₹4,800/night', image:'images/jaipur/jantar-mantar/hotel/heritage-haveli.jpg' },
        { name: 'Observatory View Inn', description: 'Near Jantar Mantar main entrance.', price: '₹4,200/night', image:'images/jaipur/jantar-mantar/hotel/observatory-view.jpg' },
        { name: 'Historic City Hotel', description: 'Budget hotel in heritage area.', price: '₹3,500/night', image:'images/jaipur/jantar-mantar/hotel/historic-city.jpg' }
      ],
      restaurants: [
        { name: 'Handi Restaurant', description: 'North Indian and Mughlai.', cuisine: 'North Indian', image:'images/jaipur/jantar-mantar/restaurant/handi.jpg' },
        { name: 'Ancient Spice', description: 'Authentic Indian and Mughlai cuisine.', cuisine: 'North Indian', image:'images/jaipur/jantar-mantar/restaurant/ancient-spice.jpg' },
        { name: 'Heritage Dining', description: 'Royal Rajasthani meals.', cuisine: 'Rajasthani', image:'images/jaipur/jantar-mantar/restaurant/heritage-dining.jpg' }
      ],
      spotsToVisit: [
        { name: 'Samrat Yantra', description: 'Largest sundial in the complex.', image: 'images/jaipur/jantar-mantar/to-visit/samrat.jpg' },
        { name: 'Astronomical Instruments', description: 'Learn about ancient astronomy and calculations.', image: 'images/jaipur/jantar-mantar/to-visit/instruments.jpg' },
        { name: 'UNESCO Heritage Tour', description: 'Guided tour of the entire observatory.', image: 'images/jaipur/jantar-mantar/to-visit/heritage-tour.jpg' }
      ],
    },
    'nahargarh fort': {
      aboutParagraph: 'Nahargarh Fort sits on the Aravalli hills overlooking Jaipur. It was built for defence and has great views of the city, especially at sunset. You can drive up and enjoy the view from the fort walls.',
      heroImage: 'images/jaipur/nahargarh-fort/nahargah-fort.jpg',
      hotels: [
        { name: 'Fort View Resort', description: 'Near the fort area with valley views.', price: '₹5,500/night', image:'images/jaipur/nahargarh-fort/hotel/fort-view.jpg' },
        { name: 'Hill Station Inn', description: 'Budget stay on the way to fort.', price: '₹4,000/night', image:'images/jaipur/nahargarh-fort/hotel/hill-station.jpg' },
        { name: 'Summit Retreat', description: 'Near fort summit with sunset views.', price: '₹6,500/night', image:'images/jaipur/nahargarh-fort/hotel/summit-retreat.jpg' }
      ],
      restaurants: [
        { name: 'Once Upon a Time', description: 'Rooftop restaurant at Nahargarh with city view.', cuisine: 'Rajasthani', image:'images/jaipur/nahargarh-fort/restaurant/once.jpg' },
        { name: 'Hilltop Café', description: 'Evening snacks and tea with views.', cuisine: 'Café', image:'images/jaipur/nahargarh-fort/restaurant/hilltop-cafe.jpg' },
        { name: 'Fort Restaurant', description: 'North Indian food and drinks.', cuisine: 'North Indian', image:'images/jaipur/nahargarh-fort/restaurant/fort-restaurant.jpg' }
      ],
      spotsToVisit: [
        { name: 'Sunset Point', description: 'Best views of Jaipur city at dusk.', image: 'images/jaipur/nahargarh-fort/to-visit/sunset.jpg' },
        { name: 'Fort Walls', description: 'Walk along the ancient fort structure.', image: 'images/jaipur/nahargarh-fort/to-visit/walls.jpg' },
        { name: 'Jaipur City Lights', description: 'Night view of pink city lights from fort.', image: 'images/jaipur/nahargarh-fort/to-visit/night-lights.jpg' }
      ],
      tours: [
        { name: 'Jaipur Royal Tour', description: 'Forts, palaces and markets.', price: '₹9,000/person', image: 'images/jaipur-tour.jpg' }
      ]
    },
    'johari bazaar': {
      aboutParagraph: 'Johari Bazaar is Jaipur\'s famous jewellery and handicraft market. You can buy traditional jewellery, gems, textiles, and souvenirs. The bazaar is colourful and full of local life.',
      heroImage: 'images/jaipur/johari-bazaar/johari-bazaar.jpg',
      hotels: [
        { name: 'Pink City Inn', description: 'Central near the bazaars.', price: '₹3,200/night', image:'images/jaipur/johari-bazaar/hotel/pin-city.jpg' },
        { name: 'Bazaar View Hotel', description: 'Right in the heart of the market.', price: '₹3,800/night', image:'images/jaipur/johari-bazaar/hotel/bazaar-view.jpg' },
        { name: 'Merchant\'s Inn', description: 'Budget hotel for shopping tourists.', price: '₹3,500/night', image:'images/jaipur/johari-bazaar/hotel/merchants-inn.jpg' }
      ],
      restaurants: [
        { name: 'Laxmi Mishthan Bhandar (LMB)', description: 'Sweets and traditional meals.', cuisine: 'Rajasthani', image:'images/jaipur/johari-bazaar/restaurant/lxmb.jpg' },
        { name: 'Bazaar Dhaba', description: 'Local North Indian and snacks.', cuisine: 'North Indian', image:'images/jaipur/johari-bazaar/restaurant/bazaar-dhaba.jpg' },
        { name: 'Sweet Shop Café', description: 'Traditional sweets and chai.', cuisine: 'Café', image:'images/jaipur/johari-bazaar/restaurant/sweet-shop-cafe.jpg' }
      ],
      spotsToVisit: [
        { name: 'Bapu Bazaar', description: 'Textiles and handicrafts.', image: 'images/jaipur/johari-bazaar/to-visit/bapu.jpg' },
        { name: 'Jewellery Stores', description: 'Traditional and modern jewellery shops.', image: 'images/jaipur/johari-bazaar/to-visit/jewellery.jpg' },
        { name: 'Market Walk', description: 'Experience the vibrant bazaar culture.', image: 'images/jaipur/johari-bazaar/to-visit/market-walk.jpg' }
      ],
      tours: [
        { name: 'Jaipur Royal Tour', description: 'Forts, palaces and markets.', price: '₹9,000/person', image: 'images/jaipur-tour.jpg' }
      ]
    }
  },
 himachal: {
    shimla: {
      aboutParagraph: 'Shimla, the Queen of Hills, is the capital of Himachal Pradesh and was the summer capital of British India. It has colonial buildings including the Viceregal Lodge, the neo-Gothic Christ Church, and the famous Mall Road. You can visit Jakhu Temple at 2,445m altitude, ride the UNESCO-listed Kalka-Shimla toy train through 103 tunnels, and enjoy cool weather and pine forests. Kufri nearby offers snow activities in winter.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        {
          name: 'The Oberoi Cecil',
          description: 'Iconic 5-star heritage hotel at the quieter end of Mall Road, established 1884. Features rich wooden floors, glowing fireplaces, a grand atrium lobby, and panoramic mountain views.',
          price: '₹18,000/night',
          image: 'images/Himachal/shimla/hotel/oberoi-cecil.jpg'
        },
        {
          name: 'Woodville Palace',
          description: 'Heritage palace hotel — former summer residence of the Raja Rana of Jubbal — set in 4 acres of deodar gardens. Features the iconic Hollywood Bar 1930s and a garden restaurant.',
          price: '₹8,000/night',
          image: 'images/Himachal/shimla/hotel/woodville-palace.jpg'
        },
        {
          name: 'Hotel Willow Banks',
          description: 'Well-regarded hotel with on-site Eighteen71 Cookhouse & Bar.',
          price: '₹5,500/night',
          image: 'images/Himachal/shimla/hotel/willow-banks.jpg'
        }
      ],
      restaurants: [
        {
          name: 'Wake and Bake',
          description: 'Popular multi-level café on Mall Road opposite Town Hall, with rooftop seating and sweeping valley views. Serves Continental, Italian, and Middle Eastern food.',
          cuisine: 'Continental / Italian',
          image: 'images/Himachal/shimla/restaurant/wake-bake.jpg'
        },
        {
          name: 'Himachal Pradesh Tourism Restaurant',
          description: 'Government-run restaurant serving local and North Indian food.',
          cuisine: 'North Indian',
          image: 'images/Himachal/shimla/restaurant/hp-tourism.jpg'
        },
        {
          name: 'Asha Restaurant',
          description: 'Authentic Himachali cuisine in central Shimla.',
          cuisine: 'Himachali',
          image: 'images/Himachal/shimla/restaurant/asha.jpg'
        }
      ],
      spotsToVisit: [
        {
          name: 'Mall Road',
          description: 'Main street with colonial buildings, shops, cafés and heritage walks.',
          image: 'images/Himachal/shimla/to-visit/mall-road.jpg'
        },
        {
          name: 'Jakhu Temple',
          description: 'Hanuman temple at 2,455m with panoramic Himalayan views.',
          image: 'images/Himachal/shimla/to-visit/jakhu-temple.jpg'
        },
        {
          name: 'Kufri',
          description: 'Snow point 16km from Shimla with skiing and horse riding.',
          image: 'images/Himachal/shimla/to-visit/kufri.jpg'
        },
        {
          name: 'Kalka-Shimla Toy Train',
          description: 'UNESCO World Heritage railway through 103 tunnels and pine forests.',
          image: 'images/Himachal/shimla/to-visit/shimla.jpg'
        }
      ],
      tours: [
        { name: 'Shimla-Manali 5D', description: 'Classic hill circuit.', price: '₹18,000/person', image: 'images/Himachal.jpg' }
      ]
    },

    manali: {
      aboutParagraph: 'Manali is a popular hill station at 2,050m altitude in the Kullu district, nestled in the Beas River Valley surrounded by snow-capped peaks and pine forests. You can visit Rohtang Pass (open May to October), Solang Valley for adventure sports, the ancient Hadimba Temple, and the relaxed cafés of Old Manali village. It is a hub for trekking, paragliding, skiing and river rafting.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        {
          name: 'Snow Valley Resorts & Spa',
          description: 'Eco-friendly 3-star resort in the Log Hut Area, 2km from Manali Bus Stand. Surrounded by apple orchards and pine forests, with a rooftop café and multi-cuisine restaurant.',
          price: '₹6,800/night',
          image: 'images/Himachal/manali/hotel/manali-snow.jpg'
        },
        {
          name: 'Johnson Lodge',
          description: 'Historic wood and stone lodge established in early 1900s with famous trout restaurant.',
          price: '₹5,200/night',
          image: 'images/Himachal/manali/hotel/johnson-lodge.jpg'
        },
        {
          name: 'Baragarh Resort & Spa',
          description: 'Luxury resort on 70 acres of apple orchards with Beas River views.',
          price: '₹9,500/night',
          image: 'images/Himachal/manali/hotel/pinewood.jpg'
        }
      ],
      restaurants: [
        {
          name: "The Johnson's Restaurant",
          description: 'First trout specialty restaurant in India, famous for fresh fish and continental.',
          cuisine: 'Continental',
          image: 'images/Himachal/manali/restaurant/johnson-lodge.jpg'
        },
        {
          name: 'Casa Bella Vista',
          description: 'Italian and Indian cuisine with mountain views.',
          cuisine: 'Italian',
          image: 'images/Himachal/manali/restaurant/casa-bella.jpg'
        },
        {
          name: "Drifter's Inn",
          description: 'Popular Old Manali café with Himachali food and backpacker vibe.',
          cuisine: 'Multi-cuisine',
          image: 'images/Himachal/manali/restaurant/local-dhaba.jpg'
        }
      ],
      spotsToVisit: [
        {
          name: 'Solang Valley',
          description: 'Adventure sports hub — paragliding, skiing, zorbing and snow activities 14km from Manali.',
          image: 'images/Himachal/manali/to-visit/solang-valley.jpg'
        },
        {
          name: 'Hadimba Temple',
          description: 'Ancient 4-tiered pagoda wooden temple in the deodar forest, dating to 1553.',
          image: 'images/Himachal/manali/to-visit/hadimba-temple.jpg'
        },
        {
          name: 'Old Manali',
          description: 'Traditional village with cafés, apple orchards and relaxed backpacker vibe.',
          image: 'images/Himachal/manali/to-visit/old-manali.jpg'
        },
        {
          name: 'Rohtang Pass',
          description: 'High mountain pass at 3,978m offering panoramic views. Open May to October.',
          image: 'images/Himachal/manali/to-visit/manali.jpg'
        }
      ],
      tours: [
        { name: 'Shimla-Manali 5D', description: 'Classic hill circuit.', price: '₹18,000/person', image: 'images/Himachal.jpg' },
        { name: 'Dharamshala & Bir 4D', description: 'Culture and paragliding.', price: '₹14,000/person', image: 'images/Himachal.jpg' }
      ]
    },

    dharamshala: {
      aboutParagraph: 'Dharamshala is home to the Dalai Lama and the Tibetan government-in-exile. It sits at 1,457m in the Kangra Valley with the Dhauladhar range as its backdrop. McLeod Ganj is the upper town with monasteries, Tibetan restaurants, and trekking. You can visit the Tsuglagkhang Temple complex, Bhagsu Waterfall, Norbulingka Institute, and enjoy Tibetan food and culture. The HPCA Cricket Stadium here is one of the most scenic in the world.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        {
          name: 'Hyatt Regency Dharamshala',
          description: 'Luxury 5-star resort spread across 6.5 acres in Village Dharamkot, above McLeod Ganj. Features Dhauladhar views, indoor pool, spa, and is 4km from the Dalai Lama Temple complex.',
          price: '₹14,000/night',
          image: 'images/Himachal/dharamshala/hotel/peace-inn.jpg'
        },
        {
          name: 'Brij Anayra',
          description: '161-year-old heritage property on 10 acres of tea gardens with valley views.',
          price: '₹12,000/night',
          image: 'images/Himachal/dharamshala/hotel/tibetan-guest.jpg'
        },
        {
          name: 'WelcomHeritage Natraj',
          description: 'Highly rated heritage hotel in McLeod Ganj near Dalai Lama Temple.',
          price: '₹6,500/night',
          image: 'images/Himachal/dharamshala/hotel/mcleod-view.jpg'
        }
      ],
      restaurants: [
        {
          name: "Jimmy's Italian Kitchen",
          description: 'Long-running favourite in McLeod Ganj with Italian and Tibetan food.',
          cuisine: 'Italian',
          image: 'images/Himachal/dharamshala/restaurant/illiterati.jpg'
        },
        {
          name: "Nick's Kitchen",
          description: 'Well-known Tibetan and Indian fusion restaurant in McLeod Ganj.',
          cuisine: 'Tibetan',
          image: 'images/Himachal/dharamshala/restaurant/nicks-kitchen.jpg'
        },
        {
          name: 'Moon Peak Café',
          description: 'Café with spiritual vibe and momos in McLeod Ganj.',
          cuisine: 'Tibetan',
          image: 'images/Himachal/dharamshala/restaurant/moon-peak.jpg'
        }
      ],
      spotsToVisit: [
        {
          name: 'Tsuglagkhang Temple',
          description: "Main Tibetan Buddhist temple complex and Dalai Lama's residence in McLeod Ganj.",
          image: 'images/Himachal/dharamshala/to-visit/tsuglagkhang.jpg'
        },
        {
          name: 'Triund Trek',
          description: 'Popular one-day trek to 2,828m with panoramic Dhauladhar views.',
          image: 'images/Himachal/dharamshala/to-visit/triund-trek.jpg'
        },
        {
          name: 'Norbulingka Institute',
          description: 'Tibetan art, culture and traditional craft center with beautiful gardens.',
          image: 'images/Himachal/dharamshala/to-visit/norbulingka.jpg'
        },
        {
          name: 'Bhagsu Waterfall',
          description: 'Scenic waterfall near McLeod Ganj, popular for short hikes.',
          image: 'images/Himachal/dharamshala/to-visit/dharamshala.jpg'
        }
      ],
      tours: [
        { name: 'Dharamshala & Bir 4D', description: 'Culture and paragliding.', price: '₹14,000/person', image: 'images/Himachal.jpg' }
      ]
    },

    'spiti valley': {
      aboutParagraph: 'Spiti Valley is a cold high-altitude desert in the Trans-Himalayan region at an average elevation of 3,800m. It has dramatic landscapes, ancient Buddhist monasteries, and clear skies ideal for stargazing. Key places include Key Monastery, Tabo (one of the oldest monasteries in the Himalayas, over 1,000 years old), and Kaza the main town. Chandratal Lake is a stunning high-altitude lake nearby. Best visited between June and October.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        {
          name: 'Zostel Spiti',
          description: "Asia's highest backpacker hostel in Kaza, with 360° mountain views. Offers dorms, private rooms, and outdoor tents. Budget-friendly with a strong traveller community vibe.",
          price: '₹2,500/night',
          image: 'images/Himachal/spiti-valley/hotel/spiti-lodge.jpg'
        },
        {
          name: 'Spiti Valley Hotel',
          description: 'Comfortable hotel in central Kaza near the Sakya Buddhist Monastery.',
          price: '₹2,200/night',
          image: 'images/Himachal/spiti-valley/hotel/tabo-guest.jpg'
        },
        {
          name: 'Parasol Camps & Retreat',
          description: 'Highly rated camp near Chandratal Lake with stunning Himalayan setting.',
          price: '₹3,500/night',
          image: 'images/Himachal/spiti-valley/hotel/key-inn.jpg'
        }
      ],
      restaurants: [
        {
          name: 'Sol Café (Kaza)',
          description: 'Well-known café in Kaza serving simple, warm food at high altitude.',
          cuisine: 'Multi-cuisine',
          image: 'images/Himachal/spiti-valley/restaurant/sol-cafe.jpg'
        },
        {
          name: 'The Himalayan Café',
          description: 'Popular café in Kaza with local Spitian and Indian food.',
          cuisine: 'North Indian',
          image: 'images/Himachal/spiti-valley/restaurant/monastery-tea.jpg'
        },
        {
          name: 'Kunga Restaurant',
          description: 'Local restaurant near Kaza market serving Tibetan and North Indian meals.',
          cuisine: 'Tibetan',
          image: 'images/Himachal/spiti-valley/restaurant/trekkers-rest.jpg'
        }
      ],
      spotsToVisit: [
        {
          name: 'Key Monastery',
          description: 'Famous Tibetan Buddhist monastery perched on a hilltop at 4,166m near Kaza.',
          image: 'images/Himachal/spiti-valley/to-visit/key-monastery.jpg'
        },
        {
          name: 'Tabo Monastery',
          description: 'Over 1,000 years old — one of the oldest active monasteries in the Himalayas.',
          image: 'images/Himachal/spiti-valley/to-visit/tabo-monastery.jpg'
        },
        {
          name: 'Chandratal Lake',
          description: 'Crescent-shaped high altitude lake at 4,300m — a stunning trekking destination.',
          image: 'images/Himachal/spiti-valley/to-visit/chandratal.jpg'
        }
      ],
      tours: [
        { name: 'Spiti Valley 7D', description: 'Adventure and monasteries.', price: '₹25,000/person', image: 'images/Himachal.jpg' }
      ]
    },

    dalhousie: {
      aboutParagraph: 'Dalhousie is a quiet colonial hill station established in 1854 and named after British Governor-General Lord Dalhousie. Set amidst pine, deodar, oak and rhododendron forests at around 2,036m, it was a favourite British summer retreat. You can visit Panchpula waterfall, the Kalatop Wildlife Sanctuary, and take a day trip to Khajjiar — the "Mini Switzerland of India" — just 24km away. Less crowded than Shimla and Manali, it is perfect for peaceful walks.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        {
          name: 'Grand View Hotel',
          description: 'Verified heritage stay with sweeping valley views in Dalhousie.',
          price: '₹4,500/night',
          image: 'images/Himachal/dalhousie/hotel/grand-view.jpg'
        },
        {
          name: 'Hotel Mount View Dalhousie',
          description: 'Well-reviewed hotel with panoramic mountain views, listed on Tripadvisor.',
          price: '₹3,800/night',
          image: 'images/Himachal/dalhousie/hotel/mount-view.jpg'
        },
        {
          name: 'Regenta Place Dalhousie',
          description: 'Branded hotel by Royal Orchid group with modern amenities in Dalhousie.',
          price: '₹5,500/night',
          image: 'images/Himachal/dalhousie/hotel/dalhousie-resort.jpg'
        }
      ],
      restaurants: [
        {
          name: 'Kwality Restaurant',
          description: 'Well-known restaurant in Dalhousie serving North Indian and local Himachali food.',
          cuisine: 'North Indian',
          image: 'images/Himachal/dalhousie/restaurant/kwality.jpg'
        },
        {
          name: 'Café Dalhousie',
          description: 'Continental and vegetarian options with a view.',
          cuisine: 'Continental',
          image: 'images/Himachal/dalhousie/restaurant/cafe-dalhousie.jpg'
        },
        {
          name: 'Local Dhaba',
          description: 'Authentic Himachali meals and tea.',
          cuisine: 'Himachali',
          image: 'images/Himachal/dalhousie/restaurant/local-dhaba.jpg'
        }
      ],
      spotsToVisit: [
        {
          name: 'Panchpula',
          description: 'Scenic stream and waterfall picnic spot with deodar forests.',
          image: 'images/Himachal/dalhousie/to-visit/panchpula.jpg'
        },
        {
          name: 'Kalatop Wildlife Sanctuary',
          description: 'Dense forest reserve with wildlife including barking deer and leopards.',
          image: 'images/Himachal/dalhousie/to-visit/kalatop.jpg'
        },
        {
          name: 'Dainkund Peak',
          description: 'Highest peak near Dalhousie at 2,755m with trekking and panoramic views.',
          image: 'images/Himachal/dalhousie/to-visit/dainkund-peak.jpg'
        },
        {
          name: 'Khajjiar',
          description: 'The "Mini Switzerland of India" — green meadow and lake 24km from Dalhousie.',
          image: 'images/Himachal/dalhousie/to-visit/dalhousie.jpg'
        }
      ],
      tours: []
    },

    kasol: {
      aboutParagraph: 'Kasol is a small village at 1,640m on the right bank of the Parvati River in Kullu district, popular with backpackers and trekkers. Known as "Mini Israel" for its large Israeli tourist presence, it is a base for treks to Kheerganga hot springs and Malana village. The nearby Manikaran Sahib Gurudwara is a major pilgrimage site for Sikhs and Hindus. You can enjoy Israeli and continental food, riverside cafés, and the relaxed mountain vibe.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        {
          name: 'Parvati Kuteer',
          description: 'Wooden cottages nestled in deodar forest on the banks of Parvati River.',
          price: '₹2,800/night',
          image: 'images/Himachal/kasol/hotel/parvati-kuteer.jpg'
        },
        {
          name: 'Echor Palm Bliss Resort',
          description: 'Riverside resort with infinity pool, stunning river and mountain views.',
          price: '₹4,500/night',
          image: 'images/Himachal/kasol/hotel/riverside-retreat.jpg'
        },
        {
          name: 'Royal Castle Kasol',
          description: '4-star hotel near the market with garden, terrace, restaurant and fitness center.',
          price: '₹3,200/night',
          image: 'images/Himachal/kasol/hotel/adventure-club.jpg'
        }
      ],
      restaurants: [
        {
          name: 'Wake N Bake',
          description: 'Real Israeli and continental café, 0.1km from Kasol centre by the Parvati River.',
          cuisine: 'Continental',
          image: 'images/Himachal/kasol/restaurant/wake-bake.jpg'
        },
        {
          name: 'The Evergreen Café',
          description: 'Verified café at the end of Manikaran road serving Italian pasta and Israeli food.',
          cuisine: 'Italian',
          image: 'images/Himachal/kasol/restaurant/evergreen.jpg'
        },
        {
          name: 'Parvati Restaurant',
          description: 'Local North Indian food and momos by the riverside.',
          cuisine: 'North Indian',
          image: 'images/Himachal/kasol/restaurant/parvati.jpg'
        }
      ],
      spotsToVisit: [
        {
          name: 'Kheerganga Trek',
          description: '12km trek to natural hot springs at 2,950m with campsite and mountain views.',
          image: 'images/Himachal/kasol/to-visit/kheerganga.jpg'
        },
        {
          name: 'Malana',
          description: 'Ancient isolated village with unique culture and customs, a popular trek from Kasol.',
          image: 'images/Himachal/kasol/to-visit/malana.jpg'
        },
        {
          name: 'Manikaran Sahib',
          description: 'Sacred Sikh and Hindu pilgrimage site with natural hot springs, 5km from Kasol.',
          image: 'images/Himachal/kasol/to-visit/parvati-river.jpg'
        }
      ],
      tours: []
    }
  },
  kashmir: {
    'dal lake': {
      aboutParagraph: 'Dal Lake is the soul of Srinagar. It is famous for houseboats, shikara rides, and floating gardens. You can stay on a houseboat, take a shikara to the floating market, and enjoy views of the Zabarwan hills. The lake is especially beautiful at sunrise and sunset.',
      heroImage: 'images/kashmir.jpg',
      hotels: [
        { name: 'Dal Lake Houseboat', description: 'Traditional houseboat stay.', price: '₹8,500/night' }
      ],
      restaurants: [
        { name: 'Ahdoos', description: 'Famous wazwan and Kashmiri cuisine.', cuisine: 'Kashmiri' },
        { name: 'Mughal Darbar', description: 'Kashmiri and North Indian.', cuisine: 'Kashmiri' }
      ],
      spotsToVisit: [
        { name: 'Shikara ride', description: 'Traditional boat on the lake.', image: 'images/kashmir.jpg' },
        { name: 'Floating market', description: 'Morning market on shikaras.', image: 'images/kashmir.jpg' }
      ],
      tours: [
        { name: 'Kashmir Paradise 5D', description: 'Srinagar, Gulmarg, Pahalgam.', price: '₹24,000/person', image: 'images/kashmir-tour.jpg' },
        { name: 'Houseboat & Gulmarg 4D', description: 'Houseboat plus Gulmarg.', price: '₹18,500/person', image: 'images/kashmir-tour.jpg' }
      ]
    },
    gulmarg: {
      aboutParagraph: 'Gulmarg is a meadow resort in the Himalayas, famous for skiing in winter and flower meadows in summer. You can take the Gondola (one of the highest cable cars), trek, and enjoy the mountain views. It is a key destination for adventure and nature in Kashmir.',
      heroImage: 'images/kashmir.jpg',
      hotels: [
        { name: 'Gulmarg Resort', description: 'Slopes and mountain views.', price: '₹9,200/night', image: 'images/kashmir/gulmarg/hotel/gulmarg-resort.jpg' },
        { name: 'Highlands Park Resort', description: 'Meadow setting with recreational activities.', price: '₹8,500/night', image: 'images/kashmir/gulmarg/hotel/highlands-park.jpg' },
        { name: 'Gulmarg Biosphere Lodge', description: 'Eco-friendly stay near Gondola station.', price: '₹7,800/night', image: 'images/kashmir/gulmarg/hotel/biosphere-lodge.jpg' }
      ],
      restaurants: [
        { name: 'Stream Restaurant', description: 'Local and Indian with mountain view.', cuisine: 'Kashmiri', image: 'images/kashmir/gulmarg/restaurant/stream.jpg' },
        { name: 'Mountain Café', description: 'Hot soups and Continental for warmth.', cuisine: 'Continental', image: 'images/kashmir/gulmarg/restaurant/mountain-cafe.jpg' },
        { name: 'Kashmiri Kitchen', description: 'Wazwan and authentic Kashmiri cuisine.', cuisine: 'Kashmiri', image: 'images/kashmir/gulmarg/restaurant/kashmiri-kitchen.jpg' }
      ],
      spotsToVisit: [
        { name: 'Gondola ride', description: 'Cable car to higher peaks and views.', image: 'images/kashmir/gulmarg/to-visit/gondola.jpg' },
        { name: 'Skiing (winter)', description: 'Ski slopes and snow activities.', image: 'images/kashmir/gulmarg/to-visit/skiing.jpg' },
        { name: 'Flower Meadows', description: 'Alpine flowers blooming in summer.', image: 'images/kashmir/gulmarg/to-visit/meadows.jpg' }
      ],
      tours: [
        { name: 'Kashmir Paradise 5D', description: 'Srinagar, Gulmarg, Pahalgam.', price: '₹24,000/person', image: 'images/kashmir-tour.jpg' },
        { name: 'Houseboat & Gulmarg 4D', description: 'Houseboat plus Gulmarg.', price: '₹18,500/person', image: 'images/kashmir-tour.jpg' }
      ]
    },
    pahalgam: {
      aboutParagraph: 'Pahalgam is a serene valley destination surrounded by pine forests and waterfalls. Famous for Kolahoi Peak trek, Aru Valley, and the Lidder River. It is a perfect base for trekking, fishing, and enjoying the pristine nature of Kashmir.',
      heroImage: 'images/kashmir/pahalgam/to-visit/pahalgam.jpg',
      hotels: [
        { name: 'Pahalgam Valley Lodge', description: 'Riverside lodge with scenic views.', price: '₹5,500/night', image: 'images/kashmir/pahalgam/hotel/valley-lodge.jpg' },
        { name: 'Forest Retreat Camp', description: 'Luxury camp with nature immersion.', price: '₹7,200/night', image: 'images/kashmir/pahalgam/hotel/forest-retreat.jpg' },
        { name: 'Lidder Riverside Inn', description: 'Budget-friendly stay by the river.', price: '₹4,500/night', image: 'images/kashmir/pahalgam/hotel/lidder-inn.jpg' }
      ],
      restaurants: [
        { name: 'Mahatta Tea House', description: 'Traditional Kashmiri tea and snacks.', cuisine: 'Kashmiri', image: 'images/kashmir/pahalgam/restaurant/mahatta.jpg' },
        { name: 'Kolahoi Restaurant', description: 'Local trout and Kashmiri cuisine.', cuisine: 'Kashmiri', image: 'images/kashmir/pahalgam/restaurant/kolahoi.jpg' },
        { name: 'Valley View Café', description: 'Continental and North Indian meals.', cuisine: 'Continental', image: 'images/kashmir/pahalgam/restaurant/valley-view.jpg' }
      ],
      spotsToVisit: [
        { name: 'Aru Valley', description: 'Meadow valley perfect for trekking.', image: 'images/kashmir/pahalgam/to-visit/aru-valley.jpg' },
        { name: 'Kolahoi Peak Trek', description: 'High-altitude trek with mountain views.', image: 'images/kashmir/pahalgam/to-visit/kolahoi-peak.jpg' },
        { name: 'Lidder River', description: 'River walks and trout fishing.', image: 'images/kashmir/pahalgam/to-visit/lidder-river.jpg' }
      ],
      tours: [
        { name: 'Kashmir Paradise 5D', description: 'Srinagar, Gulmarg, Pahalgam.', price: '₹24,000/person', image: 'images/kashmir-tour.jpg' }
      ]
    },
    sonamarg: {
      aboutParagraph: 'Sonamarg, meaning Meadow of Gold, is a stunning alpine meadow in Kashmir. Known for its green meadows, glacier views, and access to Zeoji Forest. Perfect for nature lovers and trekkers visiting the Himalayan beauty.',
      heroImage: 'images/kashmir/sonamarg/to-visit/sonamarg.jpg',
      hotels: [
        { name: 'Sonamarg Alpine Resort', description: 'Mountain views and garden stay.', price: '₹6,500/night', image: 'images/kashmir/sonamarg/hotel/alpine-resort.jpg' },
        { name: 'Glacier View Inn', description: 'Near glacier with cosy rooms.', price: '₹5,800/night', image: 'images/kashmir/sonamarg/hotel/glacier-view.jpg' },
        { name: 'Meadow Lodge', description: 'Simple and comfortable mountain lodge.', price: '₹4,500/night', image: 'images/kashmir/sonamarg/hotel/meadow-lodge.jpg' }
      ],
      restaurants: [
        { name: 'Himalayan Grill', description: 'Grilled meat and local Kashmiri food.', cuisine: 'Kashmiri', image: 'images/kashmir/sonamarg/restaurant/himalayan-grill.jpg' },
        { name: 'Mountain Dhabha', description: 'North Indian and warming soups.', cuisine: 'North Indian', image: 'images/kashmir/sonamarg/restaurant/mountain-dhaba.jpg' },
        { name: 'Sonamarg Café', description: 'Tea, coffee and light snacks.', cuisine: 'Café', image: 'images/kashmir/sonamarg/restaurant/sonamarg-cafe.jpg' }
      ],
      spotsToVisit: [
        { name: 'Glacier Lake Trek', description: 'Trek to pristine glacier lake.', image: 'images/kashmir/sonamarg/to-visit/glacier-lake.jpg' },
        { name: 'Zeoji Forest', description: 'Pine forest walks and nature trails.', image: 'images/kashmir/sonamarg/to-visit/zeoji-forest.jpg' },
        { name: 'Meadow Trails', description: 'Easy walks through golden meadows.', image: 'images/kashmir/sonamarg/to-visit/meadow-trails.jpg' }
      ],
      tours: []
    },
    'betaab valley': {
      aboutParagraph: 'Betaab Valley is a picturesque valley known for its emerald green streams and lush meadows. Famous from Bollywood movies, it offers pristine natural beauty with minimal crowd. Perfect for picnics, photography, and hiking.',
      heroImage: 'images/kashmir/betaab-valley/to-visit/betaab-valley.jpg',
      hotels: [
        { name: 'Betaab Retreat', description: 'Valley setting with comfortable rooms.', price: '₹6,000/night', image: 'images/kashmir/betaab-valley/hotel/betaab-retreat.jpg' },
        { name: 'Stream Valley Camp', description: 'Nature immersion with luxury camping.', price: '₹7,000/night', image: 'images/kashmir/betaab-valley/hotel/stream-valley.jpg' },
        { name: 'Valley Green Inn', description: 'Budget stay amidst nature.', price: '₹5,000/night', image: 'images/kashmir/betaab-valley/hotel/valley-green.jpg' }
      ],
      restaurants: [
        { name: 'Stream Side Restaurant', description: 'Kashmiri cuisine with stream views.', cuisine: 'Kashmiri', image: 'images/kashmir/betaab-valley/restaurant/streamside.jpg' },
        { name: 'Meadow Café', description: 'Light meals and hot beverages.', cuisine: 'Café', image: 'images/kashmir/betaab-valley/restaurant/meadow-cafe.jpg' },
        { name: 'River Trout House', description: 'Fresh trout and North Indian food.', cuisine: 'North Indian', image: 'images/kashmir/betaab-valley/restaurant/trout-house.jpg' }
      ],
      spotsToVisit: [
        { name: 'Emerald Stream', description: 'Crystal clear emerald water for photos.', image: 'images/kashmir/betaab-valley/to-visit/emerald-stream.jpg' },
        { name: 'Valley Meadows', description: 'Green meadows for picnics and relaxation.', image: 'images/kashmir/betaab-valley/to-visit/meadows.jpg' },
        { name: 'Hiking Trails', description: 'Easy hikes with beautiful views.', image: 'images/kashmir/betaab-valley/to-visit/hiking-trails.jpg' }
      ],
      tours: []
    }
  },
  mumbai: {
    'gateway of india': {
      aboutParagraph: 'The Gateway of India is Mumbai\'s most famous monument, built to welcome King George V in 1911. It stands by the sea in Apollo Bunder and is the starting point for boat trips to Elephanta Caves. The area has street food, photographers, and a view of the Taj Palace hotel.',
      heroImage: 'images/mumbai.jpg',
      hotels: [
        { name: 'Gateway View', description: 'Near Gateway of India.', price: '₹5,200/night' },
        { name: 'Taj Palace', description: 'Iconic hotel facing the Gateway.', price: '₹18,000/night' }
      ],
      restaurants: [
        { name: 'Bademiya', description: 'Legendary kebabs near the Gateway.', cuisine: 'Mughlai' },
        { name: 'Trishna', description: 'Fresh seafood in Fort.', cuisine: 'Seafood' }
      ],
      spotsToVisit: [
        { name: 'Elephanta Caves', description: 'Ferry from Gateway to the island.', image: 'images/mumbai.jpg' },
        { name: 'Colaba Causeway', description: 'Shopping and street food.', image: 'images/mumbai.jpg' }
      ],
      tours: [
        { name: 'Mumbai City Tour', description: 'Monuments, markets and chowpatty.', price: '₹3,500/person', image: 'images/mumbai.jpg' },
        { name: 'Elephanta & Dharavi', description: 'Caves and local experience.', price: '₹5,000/person', image: 'images/mumbai.jpg' }
      ]
    },
    'marine drive': {
      aboutParagraph: 'Marine Drive is a curved promenade along the Arabian Sea, often called the Queen\'s Necklace for its lights at night. It is perfect for an evening walk, watching the sunset, and feeling the city vibe. The area has hotels, cafés, and Chowpatty Beach at the northern end.',
      heroImage: 'images/mumbai.jpg',
      hotels: [
        { name: 'Marine Drive Hotel', description: 'Sea-facing rooms with Arabian Sea view.', price: '₹6,500/night', image: 'images/mumbai/marine-drive/hotel/marine-drive-hotel.jpg' },
        { name: 'Coastal Residency', description: 'Modern hotel on the promenade.', price: '₹7,200/night', image: 'images/mumbai/marine-drive/hotel/coastal-residency.jpg' },
        { name: 'Bay View Inn', description: 'Budget-friendly with sea view.', price: '₹4,500/night', image: 'images/mumbai/marine-drive/hotel/bay-view.jpg' }
      ],
      restaurants: [
        { name: 'Britannia & Co.', description: 'Parsi food and berry pulao.', cuisine: 'Parsi', image: 'images/mumbai/marine-drive/restaurant/britannia.jpg' },
        { name: 'Sea Breeze Restaurant', description: 'Seafood with sunset view.', cuisine: 'Seafood', image: 'images/mumbai/marine-drive/restaurant/sea-breeze.jpg' },
        { name: 'Café Marine', description: 'Coffee, snacks and casual dining.', cuisine: 'Café', image: 'images/mumbai/marine-drive/restaurant/cafe-marine.jpg' }
      ],
      spotsToVisit: [
        { name: 'Chowpatty Beach', description: 'Beach, snacks and sunset.', image: 'images/mumbai/marine-drive/to-visit/chowpatty.jpg' },
        { name: 'Queen\'s Necklace Night View', description: 'Lights at night from Worli side.', image: 'images/mumbai/marine-drive/to-visit/queens-necklace.jpg' },
        { name: 'Gazebo Walk', description: 'Evening promenade and joggers\' paradise.', image: 'images/mumbai/marine-drive/to-visit/gazebo.jpg' }
      ],
      tours: [
        { name: 'Mumbai City Tour', description: 'Monuments, markets and chowpatty.', price: '₹3,500/person', image: 'images/mumbai.jpg' }
      ]
    },
    'elephanta caves': {
      aboutParagraph: 'Elephanta Caves are UNESCO-listed ancient rock-cut caves found on Elephanta Island in Mumbai Harbour. Famous for the Shiva sculpture and carvings dating to 5-6th century. A ferry ride from Gateway of India offers both history and sea views.',
      heroImage: 'images/mumbai/elephanta-caves/to-visit/elephanta-caves.jpg',
      hotels: [
        { name: 'Island Resort Elephanta', description: 'On the island near the caves.', price: '₹8,500/night', image: 'images/mumbai/elephanta-caves/hotel/island-resort.jpg' },
        { name: 'Seaport Hotel', description: 'Near the ferry dock, convenient access.', price: '₹6,200/night', image: 'images/mumbai/elephanta-caves/hotel/seaport.jpg' },
        { name: 'Gateway Stay', description: 'In Fort area, near ferry terminal.', price: '₹5,500/night', image: 'images/mumbai/elephanta-caves/hotel/gateway-stay.jpg' }
      ],
      restaurants: [
        { name: 'Island Café', description: 'Local seafood and light meals on island.', cuisine: 'Seafood', image: 'images/mumbai/elephanta-caves/restaurant/island-cafe.jpg' },
        { name: 'Fishermen\'s Catch', description: 'Fresh catch near the dock.', cuisine: 'Seafood', image: 'images/mumbai/elephanta-caves/restaurant/fishermens.jpg' },
        { name: 'Coastal Kitchen', description: 'North Indian and coastal specialties.', cuisine: 'North Indian', image: 'images/mumbai/elephanta-caves/restaurant/coastal-kitchen.jpg' }
      ],
      spotsToVisit: [
        { name: 'Main Shiva Sculpture', description: 'Largest and most famous cave carving.', image: 'images/mumbai/elephanta-caves/to-visit/shiva-sculpture.jpg' },
        { name: 'Elephanta Harbour View', description: 'Scenic island views and UNESCO site.', image: 'images/mumbai/elephanta-caves/to-visit/harbour-view.jpg' },
        { name: 'Cave Temples', description: 'Ancient Hindu and Buddhist cave art.', image: 'images/mumbai/elephanta-caves/to-visit/cave-temples.jpg' }
      ],
      tours: [
        { name: 'Mumbai City Tour', description: 'Monuments, markets and chowpatty.', price: '₹3,500/person', image: 'images/mumbai.jpg' },
        { name: 'Elephanta & Dharavi', description: 'Caves and local experience.', price: '₹5,000/person', image: 'images/mumbai.jpg' }
      ]
    },
    'bollywood studios': {
      aboutParagraph: 'Bollywood film studios offer a behind-the-scenes look at India\'s largest film industry. Tour the sets, learn about movie production, and meet crew members. Experience the glamour and technical side of Indian cinema.',
      heroImage: 'images/mumbai/bollywood-studios/to-visit/bollywood-studios.jpg',
      hotels: [
        { name: 'Studio City Hotel', description: 'Near film city with Bollywood theme.', price: '₹7,500/night', image: 'images/mumbai/bollywood-studios/hotel/studio-city.jpg' },
        { name: 'Star Inn', description: 'Budget hotel near studios.', price: '₹5,000/night', image: 'images/mumbai/bollywood-studios/hotel/star-inn.jpg' },
        { name: 'Entertainment Plaza', description: 'Central stay for studio access.', price: '₹6,500/night', image: 'images/mumbai/bollywood-studios/hotel/entertainment-plaza.jpg' }
      ],
      restaurants: [
        { name: 'Café Lights', description: 'Themed café with movie memorabilia.', cuisine: 'Multi-cuisine', image: 'images/mumbai/bollywood-studios/restaurant/cafe-lights.jpg' },
        { name: 'Star Bites', description: 'North Indian and snacks for studio crews.', cuisine: 'North Indian', image: 'images/mumbai/bollywood-studios/restaurant/star-bites.jpg' },
        { name: 'Director\'s Table', description: 'Fine dining with film industry vibe.', cuisine: 'Multi-cuisine', image: 'images/mumbai/bollywood-studios/restaurant/directors-table.jpg' }
      ],
      spotsToVisit: [
        { name: 'Film Studio Tour', description: 'Behind-the-scenes look at working sets.', image: 'images/mumbai/bollywood-studios/to-visit/studio-tour.jpg' },
        { name: 'Sound Stage Walk', description: 'See big productions in progress.', image: 'images/mumbai/bollywood-studios/to-visit/sound-stage.jpg' },
        { name: 'Movie Museum', description: 'Costumes, props and cinema history.', image: 'images/mumbai/bollywood-studios/to-visit/movie-museum.jpg' }
      ],
      tours: []
    },
    'colaba causeway': {
      aboutParagraph: 'Colaba Causeway is Mumbai\'s famous shopping street known for boutiques, street food, and eclectic mix of old and new. A lively promenade connecting the mainland to Colaba, full of cafés, restaurants, and local character.',
      heroImage: 'images/mumbai/colaba-causeway/to-visit/colaba-causeway.jpg',
      hotels: [
        { name: 'Colaba Heritage Hotel', description: 'Right on the causeway for shopping.', price: '₹6,800/night', image: 'images/mumbai/colaba-causeway/hotel/heritage-hotel.jpg' },
        { name: 'Causeway View Inn', description: 'Budget stay with street access.', price: '₹4,500/night', image: 'images/mumbai/colaba-causeway/hotel/causeway-view.jpg' },
        { name: 'Taj Boutique', description: 'Upscale stay near Leopold and shops.', price: '₹8,500/night', image: 'images/mumbai/colaba-causeway/hotel/taj-boutique.jpg' }
      ],
      restaurants: [
        { name: 'Leopold Café', description: 'Famous street café and meeting spot.', cuisine: 'Multi-cuisine', image: 'images/mumbai/colaba-causeway/restaurant/leopold.jpg' },
        { name: 'Theobroma', description: 'Artisanal chocolate café and bakery.', cuisine: 'Café', image: 'images/mumbai/colaba-causeway/restaurant/theobroma.jpg' },
        { name: 'Street Food Stalls', description: 'Authentic Mumbai street food experience.', cuisine: 'Street Food', image: 'images/mumbai/colaba-causeway/restaurant/street-food.jpg' }
      ],
      spotsToVisit: [
        { name: 'Shopping Street', description: 'Boutiques, markets and souvenirs.', image: 'images/mumbai/colaba-causeway/to-visit/shopping.jpg' },
        { name: 'Colaba Fortress', description: 'Historic fortification and landmark.', image: 'images/mumbai/colaba-causeway/to-visit/fortress.jpg' },
        { name: 'Street Art & Cafés', description: 'Artistic vibe with bohemian atmosphere.', image: 'images/mumbai/colaba-causeway/to-visit/street-art.jpg' }
      ],
      tours: [
        { name: 'Mumbai City Tour', description: 'Monuments, markets and chowpatty.', price: '₹3,500/person', image: 'images/mumbai.jpg' }
      ]
    }
  },
  goa: {
    'calangute beach': {
      aboutParagraph: 'Calangute is Goa\'s most popular beach, with golden sand, water sports, and a busy strip of shacks and shops. You can swim, try parasailing or jet ski, and enjoy seafood and drinks by the sea. It is lively and family-friendly.',
      heroImage: 'images/goa.jpg',
      hotels: [
        { name: 'Beach Resort Calangute', description: 'On the beach with water sports access.', price: '₹5,200/night', image: 'images/goa/calangute-beach/hotel/beach-resort-calangute.jpg' },
        { name: 'Beachfront Paradise', description: 'Premium beachfront location.', price: '₹7,500/night', image: 'images/goa/calangute-beach/hotel/beachfront-paradise.jpg' },
        { name: 'Budget Beach Huts', description: 'Affordable beachside stay.', price: '₹3,800/night', image: 'images/goa/calangute-beach/hotel/budget-huts.jpg' }
      ],
      restaurants: [
        { name: 'Martin\'s Corner', description: 'Goan seafood and music.', cuisine: 'Goan', image: 'images/goa/calangute-beach/restaurant/martins-corner.jpg' },
        { name: 'Thalassa', description: 'Greek food with beach view.', cuisine: 'Greek', image: 'images/goa/calangute-beach/restaurant/thalassa.jpg' },
        { name: 'Beachfront Shack', description: 'Local seafood and drinks.', cuisine: 'Seafood', image: 'images/goa/calangute-beach/restaurant/beachfront-shack.jpg' }
      ],
      spotsToVisit: [
        { name: 'Water sports', description: 'Parasailing, jet ski, banana boat.', image: 'images/goa/calangute-beach/to-visit/water-sports.jpg' },
        { name: 'Baga Beach', description: 'Adjacent beach with nightlife and parties.', image: 'images/goa/calangute-beach/to-visit/baga-beach.jpg' },
        { name: 'Night Market', description: 'Evening flea market and shopping.', image: 'images/goa/calangute-beach/to-visit/night-market.jpg' }
      ],
      tours: [
        { name: 'Goa Beach 4D', description: 'Beaches and nightlife.', price: '₹11,500/person', image: 'images/goa-tour.jpg' },
        { name: 'Goa Heritage & Nature 5D', description: 'Churches, falls and beaches.', price: '₹16,000/person', image: 'images/goa-tour.jpg' }
      ]
    },
    'old goa': {
      aboutParagraph: 'Old Goa is the historical heart of Goa with stunning Portuguese churches and convents dating back centuries. A UNESCO World Heritage site, it showcases the architectural blend of Hindu and Portuguese influences. A place to experience Goa\'s rich history.',
      heroImage: 'images/goa/old-goa/to-visit/old-goa.jpg',
      hotels: [
        { name: 'Goa Heritage Inn', description: 'In old Goa area near churches.', price: '₹4,500/night', image: 'images/goa/old-goa/hotel/heritage-inn.jpg' },
        { name: 'Portuguese Mansion', description: 'Heritage property with colonial décor.', price: '₹5,500/night', image: 'images/goa/old-goa/hotel/portuguese-mansion.jpg' },
        { name: 'Church View Hotel', description: 'Budget stay opposite famous church.', price: '₹3,800/night', image: 'images/goa/old-goa/hotel/church-view.jpg' }
      ],
      restaurants: [
        { name: 'Heritage Restaurant', description: 'Goan and Portuguese cuisine.', cuisine: 'Goan', image: 'images/goa/old-goa/restaurant/heritage.jpg' },
        { name: 'Mission Church Café', description: 'Traditional sweets and snacks.', cuisine: 'Goan', image: 'images/goa/old-goa/restaurant/mission-cafe.jpg' },
        { name: 'Bishop\'s House Menu', description: 'Local recipes and authentic flavours.', cuisine: 'Portuguese', image: 'images/goa/old-goa/restaurant/bishops-menu.jpg' }
      ],
      spotsToVisit: [
        { name: 'Basilica of Bom Jesus', description: 'UNESCO church with St Francis Xavier.', image: 'images/goa/old-goa/to-visit/basilica.jpg' },
        { name: 'Se Cathedral', description: 'Largest church in Asia and historic landmark.', image: 'images/goa/old-goa/to-visit/se-cathedral.jpg' },
        { name: 'Archaeological Museum', description: 'Sculptures and historical artifacts.', image: 'images/goa/old-goa/to-visit/museum.jpg' }
      ],
      tours: [
        { name: 'Goa Heritage & Nature 5D', description: 'Churches, falls and beaches.', price: '₹16,000/person', image: 'images/goa-tour.jpg' }
      ]
    },
    'dudhsagar falls': {
      aboutParagraph: 'Dudhsagar Falls is India\'s second-highest waterfall, meaning Milky Ocean in Marathi. The spectacular 600-meter cascade flows through the Western Ghats and is a monsoon wonder. Trekking and jeep rides are popular ways to experience this natural marvel.',
      heroImage: 'images/goa/dudhsagar-falls/to-visit/dudhsagar-falls.jpg',
      hotels: [
        { name: 'Waterfall View Lodge', description: 'Near the falls entrance.', price: '₹5,200/night', image: 'images/goa/dudhsagar-falls/hotel/waterfall-view.jpg' },
        { name: 'Forest Stay Resort', description: 'Jungle setting near the falls.', price: '₹5,500/night', image: 'images/goa/dudhsagar-falls/hotel/forest-stay.jpg' },
        { name: 'Adventure Camp', description: 'Budget camping near trekking routes.', price: '₹3,500/night', image: 'images/goa/dudhsagar-falls/hotel/adventure-camp.jpg' }
      ],
      restaurants: [
        { name: 'Falls Café', description: 'Local food and refreshments.', cuisine: 'Multi-cuisine', image: 'images/goa/dudhsagar-falls/restaurant/falls-cafe.jpg' },
        { name: 'Jungle Dhaba', description: 'North Indian and snacks for trekkers.', cuisine: 'North Indian', image: 'images/goa/dudhsagar-falls/restaurant/jungle-dhaba.jpg' },
        { name: 'Stream Side Restaurant', description: 'Water view with simple meals.', cuisine: 'Multi-cuisine', image: 'images/goa/dudhsagar-falls/restaurant/streamside.jpg' }
      ],
      spotsToVisit: [
        { name: 'Waterfall Trek', description: 'Trekking to the base of the falls.', image: 'images/goa/dudhsagar-falls/to-visit/falls-trek.jpg' },
        { name: 'Jeep Safari', description: 'Off-road adventure to the falls.', image: 'images/goa/dudhsagar-falls/to-visit/jeep-safari.jpg' },
        { name: 'Monsoon Photography', description: 'Peak flow and misty views in monsoon.', image: 'images/goa/dudhsagar-falls/to-visit/monsoon-view.jpg' }
      ],
      tours: [
        { name: 'Goa Heritage & Nature 5D', description: 'Churches, falls and beaches.', price: '₹16,000/person', image: 'images/goa-tour.jpg' }
      ]
    },
    'anjuna beach': {
      aboutParagraph: 'Anjuna Beach is famous for its flea market, hippie culture, and vibrant nightlife. The beach attracts backpackers and party-goers with beach shacks, electronic music, and a bohemian atmosphere. Rocky coves and cliffs add to its charm.',
      heroImage: 'images/goa/anjuna-beach/to-visit/anjuna-beach.jpg',
      hotels: [
        { name: 'Anjuna Beach House', description: 'Chill vibe near the beach.', price: '₹4,800/night', image: 'images/goa/anjuna-beach/hotel/beach-house.jpg' },
        { name: 'Hippie Resort', description: 'Bohemian-style accommodation.', price: '₹5,500/night', image: 'images/goa/anjuna-beach/hotel/hippie-resort.jpg' },
        { name: 'Backpacker\'s Bliss', description: 'Budget hostel with social vibe.', price: '₹3,200/night', image: 'images/goa/anjuna-beach/hotel/backpackers-bliss.jpg' }
      ],
      restaurants: [
        { name: 'Anjuna Shack', description: 'Beach shack with electronic vibe.', cuisine: 'Multi-cuisine', image: 'images/goa/anjuna-beach/restaurant/anjuna-shack.jpg' },
        { name: 'Goa Groove', description: 'International and Indian fusion.', cuisine: 'Fusion', image: 'images/goa/anjuna-beach/restaurant/goa-groove.jpg' },
        { name: 'Flea Market Café', description: 'Casual dining during market days.', cuisine: 'Café', image: 'images/goa/anjuna-beach/restaurant/flea-market-cafe.jpg' }
      ],
      spotsToVisit: [
        { name: 'Wednesday Flea Market', description: 'Hippie market with handicrafts and souvenirs.', image: 'images/goa/anjuna-beach/to-visit/flea-market.jpg' },
        { name: 'Rocky Outcroops', description: 'Scenic rocks and coves for exploration.', image: 'images/goa/anjuna-beach/to-visit/rocks.jpg' },
        { name: 'Full Moon Party', description: 'Famous beach party with electronic music.', image: 'images/goa/anjuna-beach/to-visit/full-moon.jpg' }
      ],
      tours: [
        { name: 'Goa Beach 4D', description: 'Beaches and nightlife.', price: '₹11,500/person', image: 'images/goa-tour.jpg' }
      ]
    },
    'fontainhas': {
      aboutParagraph: 'Fontainhas is the oldest residential area of Panjim, with charming colorful Portuguese houses and winding lanes. A UNESCO-listed heritage zone, it preserves Goa\'s colonial architecture and cultural essence. Perfect for heritage walks and photography.',
      heroImage: 'images/goa/fontainhas/to-visit/fontainhas.jpg',
      hotels: [
        { name: 'Colonial Manor', description: 'Heritage stay in traditional house.', price: '₹6,200/night', image: 'images/goa/fontainhas/hotel/colonial-manor.jpg' },
        { name: 'Portuguese Homestay', description: 'Authentic local experience.', price: '₹5,000/night', image: 'images/goa/fontainhas/hotel/portuguese-homestay.jpg' },
        { name: 'Heritage Rooms', description: 'Traditional rooms with modern comfort.', price: '₹5,500/night', image: 'images/goa/fontainhas/hotel/heritage-rooms.jpg' }
      ],
      restaurants: [
        { name: 'Viva Panjim', description: 'Goan and Portuguese in Fontainhas.', cuisine: 'Goan', image: 'images/goa/fontainhas/restaurant/viva-panjim.jpg' },
        { name: 'Heritage Bistro', description: 'Colonial cuisine and local flavours.', cuisine: 'Portuguese', image: 'images/goa/fontainhas/restaurant/heritage-bistro.jpg' },
        { name: 'Café Amigos', description: 'Casual café in the heart of old lanes.', cuisine: 'Café', image: 'images/goa/fontainhas/restaurant/cafe-amigos.jpg' }
      ],
      spotsToVisit: [
        { name: 'Colorful Architecture', description: 'Portuguese colonial buildings in bright colors.', image: 'images/goa/fontainhas/to-visit/architecture.jpg' },
        { name: 'Heritage Walking Tour', description: 'Guided walk through historic lanes.', image: 'images/goa/fontainhas/to-visit/walking-tour.jpg' },
        { name: 'Chapel of St Cajetan', description: 'Historic church with heritage charm.', image: 'images/goa/fontainhas/to-visit/chapel.jpg' }
      ],
      tours: [
        { name: 'Goa Heritage & Nature 5D', description: 'Churches, falls and beaches.', price: '₹16,000/person', image: 'images/goa-tour.jpg' }
      ]
    }
  },
};
// Helper: get place key from place name (e.g. "Amber Fort" -> "amber fort")
function getPlaceKey(placeName) {
  if (!placeName) return '';
  return String(placeName).toLowerCase().trim();
}
