const Movie = require('../models/movies');

const fakeData = () => {
  Movie.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const description1 = `Reprising their roles, Oscar nominee Vera Farmiga ("Up In the Air," TV's "Bates Motel") and Patrick Wilson (the "Insidious" films), star as Lorraine and Ed Warren, who, in one of their most terrifying paranormal investigations, travel to north London to help a single mother raising four children alone in a house plagued by malicious spirits.`;

    const description2 = `The story follows a one-time bullied geek, Bob, who grew up to be a lethal CIA agent, coming home for his high school reunion. Claiming to be on a top-secret case, he enlists the help of former "big man on campus," Calvin, now an accountant who misses his glory days. But before the staid numbers-cruncher realizes what he's getting into, it's too late to get out, as his increasingly unpredictable new friend `;

    const movie1 = new Movie({
      title: 'The Conjuring 2',
      description: description1,
      director: 'James Wan',
      slug: 'the-conjuring-2',
      cuid: 'cikqgkv4q01ck7453ualdn3hd',
      genre: 'Horror',
      written_by: ['Chad Hayes', 'Carey Hayes', 'David Leslie Johnson', 'James Wan'],
      run_time: 133,
      rating: 'R (for terror and horror violence)',
      image_url: 'https://resizing.flixster.com/Yc4EMWTF0ZB844iOqUOQ5D70_sk=/206x305/v1.bTsxMTg4MjMyOTtqOzE3MDEyOzEyMDA7MTQxNzsyMTAw'
    });
    const movie2 = new Movie({
      title: 'Central Intelligence',
      description: description2,
      director: 'Rawson Marshall Thurber',
      slug: 'central-intelligence',
      cuid: 'cikqgkv4q01ck7453ualdn3hf',
      genre: 'Action & Adventure, Comedy',
      written_by: ['Ike Barinholtz', 'Dave Stassen', 'Rawson Marshall Thurber', 'David Stassen'],
      run_time: 114,
      rating: 'PG13 (for crude and suggestive humor, some nudity, action violence and brief strong language)',
      image_url: 'https://resizing.flixster.com/owVcF1E6eDt9HikyZXmsJ_40mGA=/206x305/v1.bTsxMTk0NjQ4MztqOzE3MDEzOzEyMDA7ODAwOzExODY'
    });


    Movie.create([movie1, movie2], (err) => {
      if (!err) {
        console.log('Fake data on the way !');
      }
    });
  });
};

module.exports = fakeData;
