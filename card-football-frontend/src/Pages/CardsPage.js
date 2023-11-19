import PlayerCard from "../Component/PlayerCard";

export default function CardsPage() {
    const CARDS = [
        {
            id: 1,
            name: "Pocket Passer",
            position: "Quarterback",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dailynews.com%2Fwp-content%2Fuploads%2F2021%2F02%2F1293358672-1.jpg%3Fw%3D1569&f=1&nofb=1&ipt=86914049baad3e60f2cdd7bd9e06b913f68b4e4eed16fd8ed9c83c52819325c0&ipo=images",
            cost: 3,
            strength: 1,
            speed: 1,
            skill: 5,
            intelligence: 4,
        },
        {
            id: 2,
            name: "Game Manager",
            position: "Quarterback",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F106877508-1620070411498-gettyimages-1169011644-_dxa4918.jpeg%3Fv%3D1620070449&f=1&nofb=1&ipt=78236d21edbb44b1be3ef8e4d2f604631aeb96135baed00d7336f34756990ee2&ipo=images",
            cost: 2,
            strength: 2,
            speed: 1,
            skill: 3,
            intelligence: 4,
        },
        {
            id: 3,
            name: "Dual Threat",
            position: "Quarterback",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.clubs.nfl.com%2Fimage%2Fprivate%2Ft_editorial_landscape_12_desktop%2Fravens%2Fmw91feclfd7wqrewgpxi&f=1&nofb=1&ipt=cd337391393805b5d2fd9b99c5a9fd36601807e174b4d9dfac97a804e1e3747c&ipo=images",
            cost: 4,
            strength: 3,
            speed: 5,
            skill: 4,
            intelligence: 3
        },
        {
            id: 4,
            name: "Hybrid",
            position: "Quarterback",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reviewjournal.com%2Fwp-content%2Fuploads%2F2018%2F11%2F11378236_web1_AP_18280817183056.jpg%3Fcrop%3D1&f=1&nofb=1&ipt=5a539529624970826374018a50f522e244e6cb4df65f41d891615a72fef221d4&ipo=images",
            cost: 3,
            strength: 2,
            speed: 3,
            skill: 4,
            intelligence: 3
        },
        {
            id: 5,
            name: "Beer Can",
            position: "Quarterback",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.bleacherreport.net%2Fimages_root%2Fslides%2Fphotos%2F000%2F496%2F611%2F106402328_original.jpg%3F1289414385&f=1&nofb=1&ipt=a124f9410fabe4b2c1c24dac9660d7fb256b5de02ef3ff432c144bab9b79fd22&ipo=images",
            cost: 1,
            strength: 3,
            speed: 1,
            skill: 2,
            intelligence: 2
        },
        {
            id: 6,
            name: "The Guy",
            position: "Quarterback",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.sportingnews.com%2Fstyles%2Ffacebook_1200x630%2Fs3%2F2021-08%2Fmahomes-dive-020821-getty-ftr_m5c8ihuaar8s101gzi29wdkrn.jpg%3Fitok%3DwQOZIFK9&f=1&nofb=1&ipt=44eacd65b1b528ff4c1cd3c12f66c129d912fcf7f95dab8e0f6e0b248470203d&ipo=images",
            cost: 5,
            strength: 2,
            speed: 4,
            skill: 5,
            intelligence: 4
        },
    ];
    return (
        <div className="row">
            {CARDS.map((card) => (
                <div className="col player-card-col m-1">
                    <PlayerCard card={card} />
                </div>
            ))}
        </div>
    );
}
