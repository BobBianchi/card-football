package bianco.cardfootball.domain;

import bianco.cardfootball.data.PlayerCardRepository;
import bianco.cardfootball.models.PlayerCard;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerCardService {
    private final PlayerCardRepository repository;

    public PlayerCardService(PlayerCardRepository repository) {
        this.repository = repository;
    }

    public List<PlayerCard> findAll() { return repository.findAll(); }
}
