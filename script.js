var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Places = /** @class */ (function () {
    function Places(placeName, placeAdresse, placeImage, placeVisited) {
        this.name = placeName;
        this.image = placeImage;
        this.adresse = placeAdresse;
        this.visited = placeVisited;
    }
    ;
    Places.prototype.printAll = function () {
        if (this.visited) {
            return "\n        <div class=\"test\">\n            <ul >\n                <li>" + this.name + "</li>\n                <ul >\n                    <li>" + this.visited + "</li>\n                    <li>" + this.adresse + "</li>\n                    <li>\n                        <img class=\"images\" src=\"" + this.image + "\" alt=\"\">\n                    </li>\n        \n                </ul>\n            </ul>\n        </div>";
        }
        else {
            return "\n        <div class=\"test\">\n            <ul >\n                <li>" + this.name + "</li>\n                <ul >\n                    <li>" + this.adresse + "</li>\n                    <li>\n                        <img class=\"images\" src=\"" + this.image + "\" alt=\"\">\n                    </li>\n        \n                </ul>\n            </ul>\n        </div>";
        }
    };
    ;
    return Places;
}());
;
var PlacesAndLinks = /** @class */ (function (_super) {
    __extends(PlacesAndLinks, _super);
    function PlacesAndLinks(placeName, placeAdresse, placeImage, placeLink) {
        var _this = _super.call(this, placeName, placeAdresse, placeImage) || this;
        _this.link = placeLink;
        return _this;
    }
    ;
    PlacesAndLinks.prototype.printAll = function () {
        return "\n        <div class=\"test\">\n            <ul>\n                <li>" + this.name + "</li>\n                <ul>\n                    <li>" + this.adresse + "</li>\n                    <li>\n                        <a href=\"" + this.link + "\">" + this.link + "</a>\n                    </li>\n                    <li>\n                        <img class=\"images\" src=\"" + this.image + "\" alt=\"image not found\">\n                    </li>\n        \n                </ul>\n            </ul>\n        </div>";
    };
    return PlacesAndLinks;
}(Places));
var ViennaEvents = /** @class */ (function (_super) {
    __extends(ViennaEvents, _super);
    function ViennaEvents(placeName, placeAdresse, placeImage, placeLink, eventDate, ticketPrice, eventVisited) {
        var _this = _super.call(this, placeName, placeAdresse, placeImage, placeLink) || this;
        _this.date = eventDate;
        _this.price = ticketPrice;
        _this.visited = eventVisited;
        return _this;
    }
    ;
    ViennaEvents.prototype.printAll = function () {
        if (this.visited) {
            return "\n        <div>\n            <ul>\n                <li>" + this.name + "</li>\n                <ul>\n                    <li>" + this.visited + "</li>\n                    <li>\n                        <a href=\"" + this.link + "\">" + this.link + "</a>\n                    </li>\n                    <li>" + this.date + "</li>\n                    <li>" + this.adresse + "</li>\n                    <li>" + this.price + "</li>\n                    <li>\n                        <img class=\"images\" src=\"" + this.image + "\" alt=\"image not found\">\n                    </li>\n        \n                </ul>\n            </ul>\n        </div>\n    ";
        }
        else {
            return "<div>\n        <ul>\n            <li>" + this.name + "</li>\n            <ul>\n                <li>\n                    <a href=\"" + this.link + "\">" + this.link + "</a>\n                </li>\n                <li>" + this.date + "</li>\n                <li>" + this.adresse + "</li>\n                <li>" + this.price + "</li>\n                <li>\n                    <img class=\"images\" src=\"" + this.image + "\" alt=\"image not found\">\n                </li>\n    \n            </ul>\n        </ul>\n    </div>";
        }
    };
    ;
    return ViennaEvents;
}(PlacesAndLinks));
;
function overPrint() {
    var placesInVienna = new Places("St. Charles Church", "Karlsplatz 1, 1010 Vienna", "https://lh5.googleusercontent.com/K82zHKHnrvzcc8YvbAoZOH-T1OcJymEKgjtQGB-DDiCRlvHUAkMW8dr4VwV90DXp0ipPWwopPM-dZfG2__t_9szl0YenbeQKfyzw_Jz8fgZecVx18QyenDSPDU3jHaQ7QcqqSZQz", "Created: 24.03.2021 - 12:45");
    var placesInVienna2 = new Places("Zoo Vienna", "Maxingstraße 13b, 1130 Wien", "https://lh3.googleusercontent.com/VgfofPPc0CVlCOIlKvFRYl7YiHmwxjNr26eLNR0cJSYzSKaQw-swSh7_aDEJ-mra0qcWVazURdGC_hPzFWqk80VPCZM1nbm4reh4BWg0mH58T7P-fHyCnJ2rU_KHQLdZFVRzpMWe");
    var placesInVienna3 = new PlacesAndLinks("Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19, 1050 Vienna, +43(1)5812308", "https://lh4.googleusercontent.com/mlDmaPCg_W_-UywwWTf7AwjrvFcBzrk3U6ijf3WJptrJuW68UO-hpzKIPxcG4IWgYmHY6rSBcPQ3EQoL9kKtPVkV9lx2o4vg9jRMOsVgaxkcdKCqfKtcpuQ4C-CT0lyMhByRM6Td", "http://www.lemonleaf.at/");
    var placesInVienna4 = new PlacesAndLinks("SIXTA", "1050 Wien, Schönbrunner Straße 21 ,  +43 1 58 528 56 l +43 1 58 528 56", "https://lh3.googleusercontent.com/DjL2YX0uXArCPV17yoPEgk4sfddbUZFwjz3nKgBRbgD_KVfGii9Lf_a87Nc0f6WY2_96qaSH7QPWFFlwMSKYlMIZ7DYlv3Fdgm1qeNgzMO-ILsLEdE18snUE4BWfJntlMksxtAmS", "http://www.sixta-restaurant.at/");
    var placesInVienna5 = new ViennaEvents("Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", "https://lh6.googleusercontent.com/ghTlnL_ytQecGnnyLwiv9ov33Vl61rzAFvTjNnfSe_VcrTiZiI0pykMGj2DL-1PFkVI3DIWa56S-1VSIG9-DSYMu3llMXdFIVoX5spPjvRCui_0m_tTo4y1rPE0mMByEZfOmsikL", "http://kriskristofferson.com/", "Fr., 15.11.2021. 20:00", "58,50 EUR");
    var placesInVienna6 = new ViennaEvents("Lenny Kravitz", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "https://lh6.googleusercontent.com/Cat_4yh-ZnRkPQaUbXLIrkZw-Z5Fvhq23otMHLb3F-gTfaLzrBaT7y39UVGzxy265QzcMQQwb06ceHkc7ufmdVSHKb_nTJmixMCPa98K_BFYLMq_musjOJenaY8Mf-bADcQkv2L0", "http://www.lennykravitz.com/", "Sat, 09.12.2020 - 19:30", "€ 47,80", "Created: 09.12.2020 - 19:30 ");
    document.getElementById("cards").innerHTML += "<h3 class='fw-normal ms-3'>Places:</h3>" + placesInVienna.printAll() + placesInVienna2.printAll() + "<h3 class='fw-normal ms-3'>Resaurants:</h3>" + placesInVienna3.printAll() + placesInVienna4.printAll() + "<h3 class='fw-normal ms-3'>Events:</h3>" + placesInVienna5.printAll() + placesInVienna6.printAll();
}
overPrint();
