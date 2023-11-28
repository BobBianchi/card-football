package bianco.cardfootball.controllers;

import bianco.cardfootball.domain.PlayerCardService;
import bianco.cardfootball.models.PlayerCard;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/player_card")
public class PlayerCardController {
    private final PlayerCardService service;

    public PlayerCardController(PlayerCardService service) {
        this.service = service;
    }

    @GetMapping
    public List<PlayerCard> findAll() {
        List<PlayerCard> list = new ArrayList<>();
        return list;
//        return service.findAll();
    }
}
