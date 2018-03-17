import { SpaceAge } from './calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function () {
    $("#user-info").submit(function (event) {
    event.preventDefault();
    let dob = $('#born').val();
    let gender = $('#gender').val();
    let chronicDisease = $('#disease').val();

    $(".result").show('.space-age');

    let newUser = new SpaceAge(dob, chronicDisease, gender);

    let ageOnMercury = newUser.ageMercury();
    $('#mercury-age').text(ageOnMercury);
    let lifespanOnMercury = newUser.lifeExpectancyMercury();
    $('#mercury-lifespan').text(lifespanOnMercury);

    let ageOnVenus = newUser.ageVenus();
    $('#venus-age').text(ageOnVenus);
    let lifespanOnVenus = newUser.lifeExpectancyVenus();
    $('#venus-lifespan').text(lifespanOnVenus);

    let ageOnMars = newUser.ageMars();
    $('#mars-age').text(ageOnMars);
    let lifespanOnMars = newUser.lifeExpectancyMars();
    $('#mars-lifespan').text(lifespanOnMars);

    let ageOnJupiter = newUser.ageJupiter();
    $('#jupiter-age').text(ageOnJupiter);
    let lifespanOnJupiter = newUser.lifeExpectancyJupiter();
    $('#jupiter-lifespan').text(lifespanOnJupiter);

    let message = newUser.immortal(ageOnMercury, lifespanOnMercury);
    $("#message").text(message);

    });
});
