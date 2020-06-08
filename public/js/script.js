$(document).ready(function () {
  //Submit button on event for report a crime page
  $(".report-form").on("submit", function (event) {
    event.preventDefault();

    var hood_id = $(this).children(".hood_id").val();
    var date_id = $(this).children(".date_id").val();
    var arrest_id = $(this).children(".arrest_id").val();
    var type_id = $(this).children(".type_id").val();
    var desc_id = $(this).children(".desc_id").val();

    console.log(hood_id, date_id, arrest_id, type_id, desc_id);
    $.ajax({
      method: "POST",
      url: "/report/" + hood_id,
      date_id,
      arrest_id,
      type_id,
      desc_id,
    }).then(function (data) {
      location.reload();
    });
  });

  // ++++++ Future development for SEARCH function
  //   $(".searchForm").on("submit", function (event) {
  //     event.preventDefault();

  //     var neighborhood = '{"lat":"41.987","long":"-87.662"}';

  //     console.log(neighborhood);

  //     $.ajax({
  //       method: "GET",
  //       url: "/map/neighborhood?neighborhood=" + neighborhood,
  //     }).then(function (data) {
  //       console.log(data);
  //     });
  //   });
});
