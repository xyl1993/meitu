import Vue from 'vue'

export const api = {
	exec:(method,url,params)=>{
		const options = {
			method:method,
			url:url,
			credentials:true
		}
		if(options.method == "get"){
			options.params = params;
		}else{
			options.body = params;
		}
		return Vue.http(options).catch((err) => {
			console.log(err);
		});
	},

	get:(url,query) => {
		return api.exec('get',url,query);
	}
}