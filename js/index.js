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
        latestPostContainer.appendChild(div)
    });
}

// appending Lets discus section card
const letsDiscusSectionCardContainer=document.getElementById("card-container");
const appendDiscusSectionCard=(datas)=>{
    const data=datas.posts
    data.forEach(el => {
        const div=document.createElement("div");
        div.className="flex md:p-10 p-5 bg-[#F3F3F5] rounded-3xl space-x-6 hover:border border-[#797DFC] hover:bg-[#797DFC1A]";
        div.innerHTML=`
        <!-- picture -->
        <div class="avatar relative">
            <span
                class="absolute h-3 w-3 md:h-4 md:w-4 rounded-full bg-green-500 ${el?.isActive?"bg-green-500":"bg-red-500"}  -right-1 -top-1"></span>
            <div class="md:w-[72px] md:h-[72px] w-14 h-14 rounded-xl">
                <img src="${el?.image}" />
            </div>
        </div>
        <!-- picture End-->
        <div class="flex-grow">
            <div class="space-y-4 pb-5 border-b border-dashed  border-[#12132D40]  ">
                <p class="md:space-x-5 space-x-2 text-[#12132DCC] font-medium"><span>#
                        ${el?.category}</span><span>Author: ${el?.author?.name}</span></p>
                <p class="font-bold font-xl text-[#12132D]">${el?.title}
                </p>
                <p class="font-inter text-[#12132D99]">${el?.description}</p>

            </div>
            <div class="flex justify-between pt-5">
                <div class="md:space-x-6 space-x-3 font-inter flex text-[#12132D99]">
                    <p class="md:space-x-3 space-x-1 flex"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        <span>${el?.comment_count}</span>
                    </p>
                    <p class="md:space-x-3 space-x-1 flex"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <span>${el?.view_count}</span>
                    </p>
                    <p class="md:space-x-3 space-x-1 flex"><svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>${el?.posted_time}</span>
                    </p>
                </div>
                <button type="button" class="readBtn"><img src="images/email 1.svg" alt=""></button>       
            </div>
        </div>
        `
        letsDiscusSectionCardContainer.appendChild(div);
        
    });
    // add eventllister to every read button
  const readBtns= document.getElementsByClassName("readBtn")
for (const readBtn of readBtns) {
    readBtn.addEventListener("click",(e)=>{handleClick(e)})
  
}
}
// Handle readClick and appending read post and also increasing msz count
const readCardContainer=document.getElementById("read-Card-container");
const mszCounter=[];
const mszCounterContainer=document.getElementById("msz-counter")
const handleClick=(e)=>{
    const view=e.target.parentNode.parentNode.children[0].children[1].children[1].innerText;
   const title=e.target.parentNode.parentNode.parentNode.children[0].children[1].innerText
   const div=document.createElement("div");
   div.className="p-4 bg-white rounded-2xl flex justify-between items-center"
   div.innerHTML=`
   <p class="font-semibold text-[#12132D]">${title}</p>
                            <p class="flex space-x-1 font-inter text-[#12132D99]"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <span>${view}</span>
                            </p>
   `
   readCardContainer.appendChild(div) 
   mszCounter.push(title)
   mszCounterContainer.innerText=mszCounter.length;
  
}

// Data fetching from API
const loadData=(url,callback)=>{
    letsDiscusSectionCardContainer.innerHTML=""
    const loadDatas=async(url,callback)=>{
        const promisedData=await fetch(url);
        const alldata=await promisedData.json();
        callback(alldata);
    }
    loadDatas(url,callback);
}


// Data searching fucntion
const handleSearchClick=()=>{
    if (searchValueContainer?.value) {
        const PostByQuery= `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchValueContainer.value}`
       loadData(PostByQuery,appendDiscusSectionCard)
    }

}
// Searching functionality
const searchBtn=document.getElementById("searchBtn");
const searchValueContainer=document.getElementById("searchValueContainer")
searchBtn.addEventListener("click",handleSearchClick)

const LatestPosts="https://openapi.programming-hero.com/api/retro-forum/latest-posts";
const AllPosts="https://openapi.programming-hero.com/api/retro-forum/posts"
loadData(LatestPosts,appendLatestData);
loadData(AllPosts,appendDiscusSectionCard);
