document.addEventListener("DOMContentLoaded", function() {
    function toggleDropdown() {
        document.getElementById("user-dropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.profile-icon')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        document.getElementById(sectionId).style.display = 'block';
    }

    function editProfile() {
        document.querySelector('.profile-view').style.display = 'none';
        document.querySelector('.profile-edit').style.display = 'block';
    }

    function cancelEdit() {
        document.querySelector('.profile-edit').style.display = 'none';
        document.querySelector('.profile-view').style.display = 'block';
    }

    window.showSection = showSection;
    window.toggleDropdown = toggleDropdown;
    window.editProfile = editProfile;
    window.cancelEdit = cancelEdit;
});
