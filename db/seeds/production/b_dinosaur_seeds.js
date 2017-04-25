exports.seed = function(knex, Promise) {
  return knex('animals').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return Promise.all([
        knex('animals').insert({
          name: 'James',
          species: 'Paluxysaurus',
          age: '110 million years',
          gender: 'male',
          category_id: 1,
          number_of_kills: 1000,
          animal_image: 'http://vignette2.wikia.nocookie.net/dino/images/5/52/Paluxysaurus.jpg/revision/latest?cb=20110816080846'
        }),
        knex('animals').insert({
          name: 'Joel',
          species: 'Aletopelta',
          age: '75.5 million years',
          gender: 'male',
          category_id: 2,
          number_of_kills: 999,
          animal_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aletopelta_coombsi.jpg/2880px-Aletopelta_coombsi.jpg'
        }),
        knex('animals').insert({
          name: 'Scott',
          species: 'Velociraptor',
          age: '71 million years',
          gender: 'male',
          category_id: 4,
          number_of_kills: 2147483647,
          animal_image: 'http://vignette2.wikia.nocookie.net/jurassicpark/images/1/12/Velociraptor-detail-header.png/revision/latest?cb=20150420213742'
        }),
        knex('animals').insert({
          name: 'Ashley',
          species: 'Mochlodon',
          age: '80 million years',
          gender: 'female',
          category_id: 3,
          number_of_kills: 30,
          animal_image: 'http://vignette3.wikia.nocookie.net/dinosaurs/images/e/eb/Mochlodon.jpg/revision/latest?cb=20140117180010'
        }),
        knex('animals').insert({
          name: 'Priya',
          species: 'Pisanosaurus',
          age: '228 million years',
          gender: 'female',
          category_id: 3,
          number_of_kills: 59,
          animal_image: 'http://vignette1.wikia.nocookie.net/dinosaurs/images/b/b9/Pisanosaurus.jpg/revision/latest?cb=20130630185600'
        }),
        knex('animals').insert({
          name: 'Jufe',
          species: 'Bravoceratops',
          age: '75 million years',
          gender: 'male',
          category_id: 6,
          number_of_kills: 75000,
          animal_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bravoceratops.jpg/1920px-Bravoceratops.jpg'
        }),
        knex('animals').insert({
          name: 'Tambo',
          species: 'Tyrannosaurus',
          age: '68 million years',
          gender: 'male',
          category_id: 4,
          number_of_kills: 200000,
          animal_image: 'http://islanublar.jurassicworld.com/media/dinosaurs/tyrannosaurus-rex/tyrannosaurus-rex-info-graphic.png'
        }),
        knex('animals').insert({
          name: 'Charlie',
          species: 'Brachiosaurus',
          age: '150 million years',
          gender: 'male',
          category_id: 5,
          number_of_kills: 25,
          animal_image: 'https://www.newdinosaurs.com/wp-content/uploads/2016/01/40_brachiosaurus_nobu_tamura.jpg'
        })
      ]);
    });
};
