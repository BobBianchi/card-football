package bianco.cardfootball.models;

public class PlayerCard {
    private int playerCardId;
    private Position position;
    private int cost;
    private String name;
    private int strength;
    private int speed;
    private int skill;
    private int intelligence;
    private String cardText;

    public PlayerCard(int playerCardId, Position position, int cost, String name, int strength, int speed, int skill, int intelligence, String cardText) {
        this.playerCardId = playerCardId;
        this.position = position;
        this.cost = cost;
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.skill = skill;
        this.intelligence = intelligence;
        this.cardText = cardText;
    }

    public PlayerCard() {
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

    public int getPlayerCardId() {
        return playerCardId;
    }

    public void setPlayerCardId(int playerCardId) {
        this.playerCardId = playerCardId;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getSkill() {
        return skill;
    }

    public void setSkill(int skill) {
        this.skill = skill;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

    public String getCardText() {
        return cardText;
    }

    public void setCardText(String cardText) {
        this.cardText = cardText;
    }
}
