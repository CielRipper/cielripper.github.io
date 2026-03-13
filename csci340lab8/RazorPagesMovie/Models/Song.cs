using System;
using System.ComponentModel.DataAnnotations;

namespace RazorPagesMovie.Models
{
    public class Song
    {
        public int Id { get; set; }

        [Required]
        public string? Title { get; set; }

        public string? Album { get; set; }

        [Display(Name = "Artist / Band")]
        public string? Artist { get; set; }

        public string? Genre { get; set; }

        [Display(Name = "Song Length")]
        public string? Length { get; set; }

        [Display(Name = "Playlist Order")]
        public int PlaylistOrder { get; set; }
    }
}