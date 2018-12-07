const cheerio = require('cheerio-without-node-native')
import React from 'react';


export default class Helper
{	

	static async getMp3Source(url){
		var xmlUrl=await this.getXmlUrl(url);
		let response = await fetch(xmlUrl);
	    let htmlString = await response.text();
	    var returnResult;
	    //console.log(htmlString);
	    const $ = cheerio.load(htmlString,{
	    	normalizeWhitespace: true,
    		xmlMode: true
	    });
	    //console.log($.xml());

	    var parseString = require('react-native-xml2js').parseString;
		var xml =$.xml();
		parseString(xml, function (err, result) {
			returnResult=result.tracklist.track[0].location[0];
			returnResult=returnResult.split(' ').join('');
			returnResult=returnResult.split('\n').join('');

			console.log(returnResult);
		    
		});

		return returnResult;



	}
	static async getXmlUrl(url){
    if(url!='')
	    {
	    
	    let response = await fetch(url);
	    let htmlString = await response.text();
	    //console.log(htmlString);
	    const $ = cheerio.load(htmlString);
	    const temp=$(".playing_absolute");
	    //console.log(temp.get(0).childNodes[7].childNodes[0].data);
	    var firstvariable = "player.peConfig.xmlURL = ";
	    var secondvariable = ";n                                player.peConfig.defaultIndex";
	    var linksource = JSON.stringify(temp.get(0).childNodes[7].childNodes[0].data);
	    linksource=linksource.split('"').join('');
	    linksource = linksource.replace(/\n|\r|\\/g, "");

	        
	    linksource=linksource.match(new RegExp(firstvariable + "(.*)" + secondvariable));
	    //console.log(linksource[1]); 
	    return linksource[1];
	    }  
  	}
	static async getSearchRespone(keyword)
	{	
		console.log('Helper Function getSearchRespone')
		var avatar,title,link,singer_name;
		var listItem=[];
		var firstvariable = "data-src:";
	    var secondvariable = ",onerror";
		const url= 'https://www.nhaccuatui.com/tim-kiem/bai-hat?q='+keyword+'&b=keyword&l=tat-ca&s=default';
		
		let response = await fetch(url);
	    let htmlString = await response.text();
	    //console.log(htmlString);
	    const $ = cheerio.load(htmlString); 
	    const liList=$(".sn_search_single_song");
	    //console.log(liList);
	    for(i=0;i<liList.length;i++)
	      { 
	        var temp=liList.get(i).childNodes[1].childNodes[0].attribs;      
	        avatar = JSON.stringify(temp);
	        avatar=avatar.split('"').join('');     
	        avatar=avatar.match(new RegExp(firstvariable + "(.*)" + secondvariable));
	        avatar=avatar[1];
	        title=liList.get(i).childNodes[1].attribs.title;
	        link=liList.get(i).childNodes[1].attribs.href;
	        singer_name=liList.get(0).childNodes[3].childNodes[3].childNodes[0].childNodes[0].data;

	        //console.log(title);
	        listItem=[...listItem,{
	        	'title':title,
	        	'link':link,
	        	'avatar':avatar,
	        	'singer_name':singer_name,
	        }];

	        
	      }
	     //console.log(listItem);



		return listItem;
	}
} 