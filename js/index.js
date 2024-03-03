// appending data on latest post container
const latestPostContainer=document.getElementById("latest-card-container");
const appendLatestData=(alldata)=>{
    alldata.forEach(el => {
        const div=document.createElement("div");
        div.className="rounded-3xl p-6 border border-[#12132d15] shadow-xl";
        div.innerHTML=`
        <img src="${el.cover_image}" alt="Shoes"
                        class="rounded-xl" />
                    <div class="mt-6 space-y-3">
                         <p class="text-[#12132D99] flex space-x-2"><img src="images/calender.svg" alt=""><span>${el?.author?.posted_date?el.author.posted_date:"No Publish Date"}</span></p>
                        <h6 class="font-extrabold text-[#12132D]">${el?.title}</h6>
                        <p class="text-[#12132D99]">${el?.description}</p>
                        <div class="flex  gap-4">
                            <div class="avatar">
                                <div class="w-11 h- rounded-full">
                                    <img src="${el.profile_image}" />
                                </div>
                            </div>
                            <div>
                                <h6 class="text-[#12132D] font-bold">${el?.author?.name}</h6>
                                <p id="designation" class="text-[#12132D99] text-sm">${el?.author?.designation?el.author.designation:"Unknown"}</p>
                            </div>
                        </div>
                    </div>`
        
        console.log(el);
        latestPostContainer.appendChild(div)
    });
}


const loadData=async(url,callback)=>{
    const promisedData=await fetch(url);
    const alldata=await promisedData.json();
    callback(alldata);
}

const LatestPosts="https://openapi.programming-hero.com/api/retro-forum/latest-posts";
loadData(LatestPosts,appendLatestData);