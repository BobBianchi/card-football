package bianco.cardfootball.data;

import bianco.cardfootball.models.PlayerCard;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class PlayerCardJdbcTemplateRepository {
    private static final String SELECT = """
            select player_card_id, position, cost, `name`, strength, speed, skill, intelligence, card_text
            from player_card
            """;

    private final JdbcTemplate jdbcTemplate;

    public PlayerCardJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<PlayerCard> findAll() {

    }

    public PlayerCard findById(int playerCardId) {
        String sql = SELECT + "where player_card_id = ?;";

        //TODO finish this query
    }

    public PlayerCard findByName(String name) {

    }

    public List<PlayerCard> findByPosition() {

    }

    public PlayerCard add(PlayerCard playerCard) {

    }

    public boolean update(PlayerCard playerCard) {

    }

    public boolean deleteById(int playerCardId) {

    }
}
