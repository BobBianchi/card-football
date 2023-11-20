package bianco.cardfootball.data.mappers;

import bianco.cardfootball.models.PlayerCard;
import bianco.cardfootball.models.Position;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PlayerCardMapper implements RowMapper<PlayerCard> {

    @Override
    public PlayerCard mapRow(ResultSet rs, int rowNum) throws SQLException {
        PlayerCard playerCard = new PlayerCard();
        playerCard.setPlayerCardId(rs.getInt("player_card_id"));
        playerCard.setName(rs.getString("name"));
        switch (rs.getString("position_name")) {
            case "Quarterback" -> playerCard.setPosition(Position.QUARTERBACK);
            case "Running Back" -> playerCard.setPosition(Position.RUNNINGBACK);
            case "Wide Receiver" -> playerCard.setPosition(Position.WIDERECIEVER);
            case "Tight End" -> playerCard.setPosition(Position.TIGHTEND);
        }
        playerCard.setCost(rs.getInt("cost"));
        playerCard.setStrength(rs.getInt("strength"));
        playerCard.setSpeed(rs.getInt("speed"));
        playerCard.setSkill(rs.getInt("skill"));
        playerCard.setIntelligence(rs.getInt("intelligence"));
        playerCard.setCardText(rs.getString("card_text"));

    return playerCard;
    }
}
