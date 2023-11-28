package bianco.cardfootball.data;

import bianco.cardfootball.data.mappers.PlayerCardMapper;
import bianco.cardfootball.models.PlayerCard;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlayerCardJdbcTemplateRepository implements PlayerCardRepository {
    private static final String SELECT = """
            select pc.player_card_id, p.position_name, pc.`name`, pc.cost, pc.strength, pc.speed, pc.skill, pc.intelligence
            from player_card pc
            inner join `position` p on p.position_id = pc.position_id
            """;

    private final JdbcTemplate jdbcTemplate;

    public PlayerCardJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<PlayerCard> findAll() {
        String sql = SELECT + ";";
        return jdbcTemplate.query(sql, new PlayerCardMapper());
    }

//    public PlayerCard findById(int playerCardId) {
//        String sql = SELECT + "where player_card_id = ?;";
//
//        //TODO finish this query
//    }
//
//    public PlayerCard findByName(String name) {
//
//    }
//
//    public List<PlayerCard> findByPosition() {
//
//    }
//
//    public PlayerCard add(PlayerCard playerCard) {
//
//    }
//
//    public boolean update(PlayerCard playerCard) {
//
//    }
//
//    public boolean deleteById(int playerCardId) {
//
//    }
}
