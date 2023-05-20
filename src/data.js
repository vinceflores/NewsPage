import gaming_growth from "./images/image-gaming-growth.jpg";
import retro_pcs from "./images/image-retro-pcs.jpg";
import top_laptops from "./images/image-top-laptops.jpg";
import hydrogen_vs_electric from "./images/Hydrogen-vs-Ele-0.png"
export const data = {
  new: [
    {
      id: "one",
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: "two",
      title: " The Downsides of AI Artistry",
      description:
        " What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: "three",
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ],
  popular: [
    {
      id: "01",
      image: gaming_growth,
      title: " Reviving Retro PCs",
      description: " What happens when old PCs are given modern upgrades?",
    },
    {
      id: "02",
      image: top_laptops,
      title: " Top 10 Laptops of 2022",
      description: " Our best picks for various needs and budgets.",
    },
    {
      id: "03",
      image: retro_pcs,
      title: " The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
    },
  ],
  articles: {
    new:[{
        "title": "Hydrogen vs. Electric Cars: Closing the Gap?",
        "image": hydrogen_vs_electric, 
        "content": [
          {
            "heading": "Introduction",
            "paragraphs": [
              `The automotive industry has been witnessing a transformative shift towards cleaner and more sustainable transportation alternatives. Among the contenders, hydrogen-fueled cars and electric vehicles (EVs) have emerged as leading options. This article explores the ongoing debate regarding the potential of hydrogen-fueled cars to catch up with the ever-growing popularity of EVs.`
            ]
          },
          {
            "heading": "The Rise of Electric Vehicles",
            "paragraphs": [
              `In recent years, electric vehicles have dominated the market, capturing the attention of consumers and policymakers alike. EVs offer numerous advantages, including zero tailpipe emissions, lower operating costs, and a well-established charging infrastructure. Major automakers have invested heavily in EV technology, leading to significant advancements in battery efficiency, driving range, and affordability.`
            ]
          },
          {
            "heading": "The Challenges Facing Hydrogen Cars",
            "paragraphs": [
              `Hydrogen-fueled cars, on the other hand, face several challenges that hinder their widespread adoption. The primary obstacle lies in the production and distribution of hydrogen fuel. Currently, the majority of hydrogen is obtained through a process called steam methane reforming, which relies on natural gas and emits carbon dioxide. Additionally, hydrogen infrastructure is limited compared to the vast network of EV charging stations.`
            ]
          },
          {
            "heading": "Efficiency and Range",
            "paragraphs": [
              `When it comes to efficiency, EVs have the upper hand. Electric motors are highly efficient, converting over 90% of stored energy into propulsion. In contrast, hydrogen fuel cells have an efficiency rate of around 60%. Moreover, EVs have significantly longer driving ranges compared to hydrogen cars. The battery technology in EVs has advanced to provide ranges exceeding 300 miles on a single charge, while hydrogen cars struggle to match that capability.`
            ]
          },
          {
            "heading": "Infrastructure and Cost",
            "paragraphs": [
              `The availability of charging infrastructure is crucial for the mass adoption of any alternative fuel vehicle. Electric vehicles benefit from an expanding network of charging stations, making it convenient for drivers to recharge their cars. In contrast, hydrogen infrastructure remains limited, with only a handful of refueling stations in operation. Moreover, the cost of establishing hydrogen infrastructure is significantly higher than building EV charging networks, further impeding the growth of hydrogen-fueled cars.`
            ]
          },
          {
            "heading": "Environmental Impact",
            "paragraphs": [
              `While both hydrogen and electric cars contribute to reducing greenhouse gas emissions, the production of hydrogen fuel faces challenges in terms of sustainability. As mentioned earlier, the current production methods for hydrogen often rely on fossil fuels, leading to carbon emissions. In contrast, EVs powered by electricity from renewable sources offer a cleaner and more sustainable option.`
            ]
          },
          {
            "heading": "Government Support and Industry Collaboration",
            "paragraphs": [
              `Government incentives and policies play a pivotal role in shaping the future of the automotive industry. To date, numerous countries have introduced subsidies, tax incentives, and grants to promote the adoption of electric vehicles. These measures have accelerated the growth of EV sales and the development of supporting infrastructure. Conversely, hydrogen cars have received less attention from policymakers, resulting in a slower rate of progress and limited investment in infrastructure.`
            ]
          },
          {
            "heading": "Conclusion",
            "paragraphs": [`
            While hydrogen-fueled cars hold promise as an alternative to electric vehicles, significant challenges must be addressed to close the gap. The limited hydrogen infrastructure, higher costs, and lower efficiency compared to EVs pose significant obstacles to widespread adoption. Nonetheless, advancements in hydrogen production methods, increased industry collaboration, and government support could enhance the viability of hydrogen cars in the future. Ultimately, both technologies have their merits, and a combination of EVs and hydrogen cars may pave the way for a cleaner and more sustainable transportation ecosystem.`] 
          }
        ], 
    }]
  },
};
