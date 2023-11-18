package bianco.cardfootball.models;

public class PlayerCard {
    private int cardId;
    private Position position;
    private int cost;
    private String name;
    private int STG;
    private int SPD;
    private int SKL;
    private int INT;
    private String cardText;
    public PlayerCard(int cardId, Position position, int cost, String name, int STG, int SPD, int SKL, int INT, String cardText) {
        this.cardId = cardId;
        this.position = position;
        this.cost = cost;
        this.name = name;
        this.STG = STG;
        this.SPD = SPD;
        this.SKL = SKL;
        this.INT = INT;
        this.cardText = cardText;
    }

    public int getCardId() {
        return cardId;
    }

    public void setCardId(int cardId) {
        this.cardId = cardId;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSTG() {
        return STG;
    }

    public void setSTG(int STG) {
        this.STG = STG;
    }

    public int getSPD() {
        return SPD;
    }

    public void setSPD(int SPD) {
        this.SPD = SPD;
    }

    public int getSKL() {
        return SKL;
    }

    public void setSKL(int SKL) {
        this.SKL = SKL;
    }

    public int getINT() {
        return INT;
    }

    public void setINT(int INT) {
        this.INT = INT;
    }

    public String getCardText() {
        return cardText;
    }

    public void setCardText(String cardText) {
        this.cardText = cardText;
    }
}
