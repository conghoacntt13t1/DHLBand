app.service('rankingService',function () {
	this.getRankingList=function () {
        return rankingList;
    };
	

    var rankingList=[
	    {
	    	id: 1,
	    	name: 'Lorem Ipsum',
	    	score: 90
	    },
	    {
	    	id: 2,
	    	name: 'Foo Bar',
	    	score: 85
	    },
	    {
	    	id: 3,
	    	name: 'Vempors',
	    	score: 70
	    },
	    {
	    	id: 4,
	    	name: 'Ipsum Lorem',
	    	score: 70
	    },
	    {
	    	id: 5,
	    	name: 'Pariatur Voluptas',
	    	score: 60
	    },
	    {
	    	id: 6,
	    	name: 'Quam Totam',
	    	score: 50
	    },
	    {
	    	id: 7,
	    	name: 'Sunt Sed',
	    	score: 50
	    },
	    {
	    	id: 8,
	    	name: 'Non Quia',
	    	score: 40
	    },
	    {
	    	id: 9,
	    	name: 'Consequuntur Esse',
	    	score: 40
	    },
	    {
	    	id: 10,
	    	name: 'Ad Sit Aliquid',
	    	score: 10
	    },
    ];
});