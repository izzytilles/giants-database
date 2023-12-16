module.exports = {

    /* team queries */
    choose_team : 'SELECT * FROM team_year_info WHERE team_name = ?',
    wins_and_losses : 'AND wins >= ? AND losses >= ?',
    budget : 'AND budget >= ? AND budget <= ?',



    /* hitter queries */

    choose_hitter : 'SELECT * FROM hitter WHERE player_name = ?',

    all_time_hitter : `SELECT p.player_name, SUM(h.games_played) as games_played, SUM(h.salary) as salary, SUM(h.war) as war, SUM(h.hits) as hits, SUM(h.singles) as singles, SUM(h.doubles) as doubles, 
                        SUM(h.triples) as triples, SUM(h.homeruns) as home_runs, SUM(h.stolen_bases) as stolen_bases, ROUND(AVG(h.batting_avg), 3) as batting_avg, ROUND(AVG(h.ops), 3) as ops, ROUND(AVG(h.slg), 3) as slg
                    FROM hitter h JOIN player p USING (player_name)
                    WHERE p.primary_position = ?
                    GROUP BY p.player_name`,
    all_time_homeruns : ' ORDER BY home_runs DESC',
    all_time_games_played : ' ORDER BY games_played DESC',
    all_time_salary : ' ORDER BY salary DESC',
    all_time_hits : ' ORDER BY hits DESC',
    all_time_war : ' ORDER BY war DESC',
    all_time_singles : ' ORDER BY singles DESC',
    all_time_doubles : ' ORDER BY doubles DESC',
    all_time_triples : ' ORDER BY triples DESC',
    all_time_doubles : ' ORDER BY doubles DESC',
    all_time_batting_avg : ' ORDER BY batting_avg DESC',
    all_time_sb : ' ORDER BY stolen_bases DESC',
    all_time_ops : ' ORDER BY ops DESC',
    all_time_slg : ' ORDER BY slg DESC',


    /* pitcher queries */

    choose_pitcher : 'SELECT * FROM pitcher WHERE player_name = ?',

    all_time_pitcher : `SELECT p.player_name, SUM(pr.games_played) as games_played, SUM(pr.salary) as salary, SUM(pr.war) as war, SUM(pr.wins) as wins, SUM(pr.losses) as losses,
                            SUM(pr.saves) as saves, SUM(pr.strikeouts) as strikeouts, SUM(pr.innings) as innings, ROUND(AVG(pr.era), 2) as era, ROUND(AVG(pr.whip), 3) as whip
                    FROM pitcher pr JOIN player p USING (player_name)
                    GROUP BY p.player_name`,
    all_time_games_pitched: ' ORDER BY games_played DESC',
    all_time_salary_pitcher: ' ORDER BY salary DESC',
    all_time_war_pitcher: ' ORDER BY war DESC',
    all_time_wins: ' ORDER BY wins DESC',
    all_time_losses: ' ORDER BY losses ASC',
    all_time_saves: ' ORDER BY saves DESC',
    all_time_strikeouts: ' ORDER BY strikeouts DESC',
    all_time_innings: ' ORDER BY innings DESC',
    all_time_era: ' ORDER BY era ASC', 
    all_time_whip: ' ORDER BY whip ASC',

    /* award queries */
    choose_player_winner : 'SELECT * FROM player_winner ',

    choose_winner : ' WHERE player_name = ? ORDER BY season',
    choose_award : ' WHERE award_name = ? ORDER BY season',
    choose_year : ' WHERE pw.season = ?',

    choose_team_winner : 'SELECT * FROM team_winner WHERE award_name = ?',

    winning_roster : `SELECT pw.player_name AS player, pw.award_name AS award
                    FROM hitter h JOIN team_winner tw ON h.season = tw.season
                    LEFT OUTER JOIN player_winner pw ON h.player_name = pw.player_name AND h.season = pw.season
                    WHERE tw.award_name = ? AND tw.season = ?`,

    /* editing queries */
    insert_player : 'INSERT INTO player VALUE (?, ?, ?, ?, ?, ?)',
    insert_season_hitter : 'INSERT INTO hitter VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    insert_season_pitcher : 'INSERT INTO pitcher VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

};