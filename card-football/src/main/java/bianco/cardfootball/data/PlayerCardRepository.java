package bianco.cardfootball.data;

import bianco.cardfootball.models.PlayerCard;

import java.util.List;

public interface PlayerCardRepository {
    List<PlayerCard> findAll();
}
