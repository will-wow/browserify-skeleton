module.exports = function(grunt) {
	return {
		dev: {
			src: ['dev'],
			options:{
				force:true
			}
		},
		build: {
			src:['www'],
			options:{
				force:true
			}
		}
	};
};
