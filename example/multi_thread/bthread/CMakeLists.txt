# -----------------------------------------------------------------------------
# CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-19 Bradley M. Bell
#
# CppAD is distributed under the terms of the
#              Eclipse Public License Version 2.0.
#
# This Source Code may also be made available under the following
# Secondary License when the conditions for such availability set forth
# in the Eclipse Public License, Version 2.0 are satisfied:
#       GNU General Public License, Version 2.0 or later.
# -----------------------------------------------------------------------------
# Build the example/multi_thread/bthread directory tests
# Inherit build type from ../CMakeList.txt

# Local include directories to search (not in package_prefix/include)
INCLUDE_DIRECTORIES( ${CMAKE_CURRENT_SOURCE_DIR}/.. )

# add_executable(<name> [WIN32] [MACOSX_BUNDLE] [EXCLUDE_FROM_ALL]
#                 source1 source2 ... sourceN
# )
SET(source_list ../thread_test.cpp
    ${CMAKE_SOURCE_DIR}/speed/src/microsoft_timer.cpp
    ../team_example.cpp
    ../harmonic.cpp
    ../multi_atomic_two.cpp
    ../multi_atomic_three.cpp
    ../multi_chkpoint_one.cpp
    ../multi_chkpoint_two.cpp
    ../multi_newton.cpp
    a11c_bthread.cpp
    simple_ad_bthread.cpp
    team_bthread.cpp
)
set_compile_flags(
    example_multi_thread_bthread "${cppad_debug_which}" "${source_list}"
)
#
ADD_EXECUTABLE( example_multi_thread_bthread EXCLUDE_FROM_ALL ${source_list} )

# List of libraries to be linked into the specified target
TARGET_LINK_LIBRARIES(example_multi_thread_bthread ${Boost_LIBRARIES})

# Add the check_example_multi_thread_bthread target
ADD_CUSTOM_TARGET(check_example_multi_thread_bthread
    example_multi_thread_bthread simple_ad
    DEPENDS example_multi_thread_bthread
)
MESSAGE(STATUS "make check_example_multi_thread_bthread: available")

# Change check depends in parent environment
add_to_list(
    check_example_multi_thread_depends check_example_multi_thread_bthread
)
SET(check_example_multi_thread_depends
    "${check_example_multi_thread_depends}" PARENT_SCOPE
)
