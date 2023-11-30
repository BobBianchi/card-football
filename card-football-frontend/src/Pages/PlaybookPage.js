import PlayCard from "../Component/PlayCard";

export default function PlaybookPage() {
    const CARDS = [
        {
            id: 1,
            name: "Zone Run",
            type: "Run",
            yardageBaseMin: 0,
            yardageBaseMax: 8,
            imgUrl: "https://youthfootballonline.com/wp-content/uploads/2017/05/Outside-Zone-1-1.png",
            tightEnds: 2,
            runningBacks: 1,
            wideReceivers: 2,
            quarterBackIsUnderCenter: true,
            cardText: "Lorem Ipsum Card Text"
        },
        {
            id: 2,
            name: "Half-Back Iso",
            type: "Run",
            yardageBaseMin: 1,
            yardageBaseMax: 5,
            imgUrl: "https://youthfootballonline.com/wp-content/uploads/2017/05/Outside-Zone-1-1.png",
            tightEnds: 2,
            runningBacks: 1,
            wideReceivers: 2,
            quarterBackIsUnderCenter: true,
            cardText: "Lorem Ipsum Card Text"
        },
        {
            id: 3,
            name: "Verticals",
            type: "Pass",
            yardageBaseMin: 12,
            yardageBaseMax: 25,
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.usafootball.com%2Fcms%2Finline-images%2F%25231%2520(2).jpg&f=1&nofb=1&ipt=ceeaec9f695403e3b0a92e20336a6bb5a74eee2f646316cf769e1986adeb73e5&ipo=images",
            tightEnds: 0,
            runningBacks: 1,
            wideReceivers: 4,
            quarterBackIsUnderCenter: false,
            cardText: "One TE can play as WR here"
        },
        {
            id: 4,
            name: "Screen Pass",
            type: "Pass",
            yardageBaseMin: 0,
            yardageBaseMax: 20,
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsmartfootball.com%2Fwp-content%2Fuploads%2F2011%2F10%2Fstick-slowscreen.jpg&f=1&nofb=1&ipt=a723e24f5515266039a13c92c71daff79325a8404666d2f245366f93d3846ad5&ipo=images",
            tightEnds: 1,
            runningBacks: 1,
            wideReceivers: 3,
            quarterBackIsUnderCenter: false,
            cardText: "multiply pressure number * -1"
        },
        {
            id: 5,
            name: "Slants",
            type: "Pass",
            yardageBaseMin: 4,
            yardageBaseMax: 8,
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.contentapi.ea.com%2Fcontent%2Fdam%2Fea%2Fmadden-nfl%2Fmadden-nfl-24%2Fplaybooks%2Fplays%2Fcommon%2F20108.png.adapt.320w.png&f=1&nofb=1&ipt=ba673da46bca8189c10ba41c88670a28c7017224e7b5632d1044dd99e64dc167&ipo=images",
            tightEnds: 1,
            runningBacks: 1,
            wideReceivers: 3,
            quarterBackIsUnderCenter: true,
            cardText: "+1 if defense guesses run"
        },
        {
            id: 6,
            name: "Slants",
            type: "Pass",
            yardageBaseMin: 4,
            yardageBaseMax: 8,
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.contentapi.ea.com%2Fcontent%2Fdam%2Fea%2Fmadden-nfl%2Fmadden-nfl-24%2Fplaybooks%2Fplays%2Fcommon%2F20108.png.adapt.320w.png&f=1&nofb=1&ipt=ba673da46bca8189c10ba41c88670a28c7017224e7b5632d1044dd99e64dc167&ipo=images",
            tightEnds: 1,
            runningBacks: 1,
            wideReceivers: 3,
            quarterBackIsUnderCenter: true,
            cardText: "+1 if defense guesses run"
        },
        {
            id: 7,
            name: "Play Action",
            type: "Pass",
            yardageBaseMin: 8,
            yardageBaseMax: 15,
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.firstdownplaybook.com%2Fwp-content%2Fuploads%2F2022%2F03%2FYouth-Football-Play-Action-Pass-1.png&f=1&nofb=1&ipt=b9214db29373f5c822f052d34fb012661a65d18f776ecd80c26bb816845337b5&ipo=images",
            tightEnds: 2,
            runningBacks: 2,
            wideReceivers: 1,
            quarterBackIsUnderCenter: true,
            cardText: "+1 if defense guesses run"
        },
        {
            id: 8,
            name: "Power Run",
            type: "Run",
            yardageBaseMin: 2,
            yardageBaseMax: 5,
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.firstdownplaybook.com%2Fwp-content%2Fuploads%2F2021%2F06%2FPower-Run-Game-Chalk-Talk-FDPB-Play-8205.png&f=1&nofb=1&ipt=85c768f61e699e12d1e1b315d74bf8ef6c5609e732aeb78c64ff41f89e379d62&ipo=images",
            tightEnds: 2,
            runningBacks: 2,
            wideReceivers: 1,
            quarterBackIsUnderCenter: true,
            cardText: "Use Fullback: if snap phase is success, skip execute phase and take 2 yards"
        },
        {
            id: 9,
            name: "QB Sneak",
            type: "Run",
            yardageBaseMin: 0,
            yardageBaseMax: 2,
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.firstdownplaybook.com%2Fwp-content%2Fuploads%2F2021%2F06%2FPower-Run-Game-Chalk-Talk-FDPB-Play-8205.png&f=1&nofb=1&ipt=85c768f61e699e12d1e1b315d74bf8ef6c5609e732aeb78c64ff41f89e379d62&ipo=images",
            tightEnds: 2,
            runningBacks: 2,
            wideReceivers: 1,
            quarterBackIsUnderCenter: true,
            cardText: "can't be negative"
        },
    ];
    return (
        <div className="row">
            {CARDS.map((card) => (
                <div 
                className="col player-card-col m-1"
                key={`play-card-${card.id}`}
                >
                    <PlayCard card={card} />
                </div>
            ))}
        </div>
    );
}